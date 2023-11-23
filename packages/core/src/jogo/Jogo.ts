import { EspacoObstaculos } from "../obstaculo/EspacoObstaculos"
import { Nivel } from "../obstaculo/Nivel"
import ObjetoValor from "../shared/ObjetoValor"
import Obstaculos, { ObstaculosProps } from "../obstaculo/Obstaculos"
import Passaro, { PassaroProps } from "../passaro/Passaro"
import Pontuacao from "../shared/Pontuacao"
import SensorColisao, { RespostaSensorColisao } from "./SensorColisao"

export interface JogoProps {
    nivel?: Nivel
    espaco?: EspacoObstaculos
    obstaculos?: ObstaculosProps
    passaro?: PassaroProps
    emColisao?: boolean
    pontos?: number
    recorde?: number
}

export default class Jogo extends ObjetoValor<Jogo> {
    readonly obstaculos: Obstaculos
    readonly passaro: Passaro
    readonly pontos: Pontuacao
    readonly recorde: Pontuacao
    readonly emColisao: boolean

    private constructor(props: JogoProps) {
        super(props)
        this.obstaculos = Obstaculos.novo(props.obstaculos)
        this.passaro = new Passaro(props.passaro!)
        this.pontos = Pontuacao.nova(props.pontos ?? 0, "pontos")
        this.recorde = Pontuacao.nova(props.recorde!, "recorde")
        this.emColisao = props.emColisao ?? false
    }

    static novo(props?: JogoProps): Jogo {
        const finalProps: JogoProps = {
            ...props,
            recorde: Math.max(props?.pontos ?? 0, props?.recorde ?? 0),
            obstaculos: props?.obstaculos ?? {
                nivel: props?.nivel ?? Nivel.MEDIO,
                espaco: props?.espaco ?? EspacoObstaculos.NORMAL,
            },
            passaro: props?.passaro ?? {
                altura: 0.06,
                largura: 0.04,
                altitude: 0.5,
                peso: 0.003,
            },
        }
        return new Jogo(finalProps)
    }

    get nivel(): Nivel {
        return this.obstaculos.nivel
    }

    get espaco(): EspacoObstaculos {
        return this.obstaculos.espaco
    }

    passaroEstaVoando(voando: boolean): Jogo {
        const passaro = this.passaro.clone({ voando }).props
        return this.clone({ passaro })
    }

    animar(): Jogo {
        if (this.emColisao) return this
        
        const obstaculos = this.obstaculos.animar()
        const passaro = this.passaro.animar()

        const { COLIDIU, PASSOU } = RespostaSensorColisao
        const sensor = new SensorColisao()
        const resposta = sensor.aferir(this.passaro, this.obstaculos, obstaculos)
        const pontos =
            resposta === PASSOU ? this.pontos.incrementar().valor : this.pontos.valor

        return this.clone({
            passaro: passaro.props,
            obstaculos: obstaculos.props,
            emColisao: resposta === COLIDIU,
            pontos,
            recorde: Math.max(pontos, this.recorde.valor),
        })
    }

    reiniciar(props?: ObstaculosProps): Jogo {
        return Jogo.novo({
            nivel: props?.nivel ?? this.nivel,
            espaco: props?.espaco ?? this.espaco,
            recorde: this.recorde.valor,
        })
    }

    zerar(): Jogo {
        return Jogo.novo()
    }
}

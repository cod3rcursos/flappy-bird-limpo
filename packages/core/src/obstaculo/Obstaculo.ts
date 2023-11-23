import { Nivel } from "./Nivel"
import NumeroAleatorio from "../shared/NumeroAleatorio"
import ObjetoValor from "../shared/ObjetoValor"
import Percentual from "../shared/Percentual"

export interface ObstaculoProps {
    superior?: number
    inferior?: number
    largura?: number
    posicao?: number
    nivel?: Nivel
}

export default class Obstaculo extends ObjetoValor<Obstaculo> {
    readonly superior: Percentual
    readonly inferior: Percentual
    readonly largura: Percentual
    readonly posicao: Percentual
    readonly nivel: Nivel

    private constructor(props: ObstaculoProps) {
        super(props)
        this.superior = Percentual.novo(props.superior!, "superior")
        this.inferior = Percentual.novo(props.inferior!, "inferior")
        this.largura = Percentual.novo(props.largura!, "largura")
        this.posicao = Percentual.novo(props.posicao!, "posição", -1, 3)
        this.nivel = props.nivel!

        const percentualOcupado = this.inferior.valor + this.superior.valor
        this.validarPercentualOcupado(percentualOcupado)
    }

    static novo(props?: ObstaculoProps): Obstaculo {
        const nivel = props?.nivel ?? Nivel.MEDIO
        const tamanhoMinimo = 0.1
        const tamanhoMaximo = 1 - nivel - tamanhoMinimo
        const inferior = new NumeroAleatorio(tamanhoMinimo, tamanhoMaximo).valor
        const superior =
            Math.round((1 - inferior - nivel) * 100) / 100
        return new Obstaculo({
            superior: props?.superior ?? superior,
            inferior: props?.inferior ?? inferior,
            largura: 0.08,
            posicao: props?.posicao!,
            nivel,
        })
    }

    get vao(): Percentual {
        return Percentual.novo(this.nivel)
    }

    animar(): Obstaculo {
        return this.clone({ posicao: this.posicao.valor - 0.001 })
    }

    private validarPercentualOcupado(percentualOcupado: number) {
        const percentualEsperado = 1 - this.nivel

        const ocupado = Math.round(percentualOcupado * 100) / 100
        const esperado = Math.round(percentualEsperado * 100) / 100

        if (ocupado !== esperado) {
            throw new Error(
                `O vão entre os obstaculos deve ser de ${Math.round(
                    (1 - percentualEsperado) * 100,
                )}%`,
            )
        }
    }
}

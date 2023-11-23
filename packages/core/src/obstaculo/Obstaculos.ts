import Obstaculo, { ObstaculoProps } from "./Obstaculo"
import { Nivel } from "./Nivel"
import ObjetoValor from "../shared/ObjetoValor"
import { EspacoObstaculos } from "./EspacoObstaculos"

export interface ObstaculosProps {
    nivel?: Nivel
    espaco?: EspacoObstaculos
    itens?: ObstaculoProps[]
}

export default class Obstaculos extends ObjetoValor<Obstaculos> {
    readonly nivel: Nivel
    readonly espaco: EspacoObstaculos
    readonly itens: Obstaculo[]

    private constructor(props: ObstaculosProps) {
        super(props)
        this.nivel = props.nivel!
        this.espaco = props.espaco!
        this.itens = props.itens!.map((i) => Obstaculo.novo(i))!
    }

    static novo(props?: ObstaculosProps) {
        const nivel = props?.nivel ?? Nivel.MEDIO
        const espaco = props?.espaco ?? EspacoObstaculos.NORMAL
        const itensNovos = [
            Obstaculo.novo({ nivel, posicao: 1 }),
            Obstaculo.novo({ nivel, posicao: 1 + espaco }),
            Obstaculo.novo({ nivel, posicao: 1 + espaco * 2 }),
            Obstaculo.novo({ nivel, posicao: 1 + espaco * 3 }),
            Obstaculo.novo({ nivel, posicao: 1 + espaco * 4 }),
        ].map((i) => i.props)

        return new Obstaculos({
            nivel,
            espaco,
            itens: props?.itens ?? itensNovos,
        })
    }

    animar(): Obstaculos {
        const novosItens = this.itens.map((item) => item.animar())
        const maiorPosicao = Math.max(...novosItens.map((item) => item.posicao.valor))
        const menorPosicao = Math.min(...novosItens.map((item) => item.posicao.valor))
        const itens = novosItens.map((item) => {
            const estaMenorPosicao = item.posicao.valor === menorPosicao
            const estaForaDaTela = menorPosicao < -item.largura.valor
            return estaMenorPosicao && estaForaDaTela
                ? Obstaculo.novo({
                      nivel: this.nivel,
                      posicao: maiorPosicao + this.espaco,
                  })
                : item
        })
        return this.clone({ itens: itens.map((i) => i.props) })
    }
}

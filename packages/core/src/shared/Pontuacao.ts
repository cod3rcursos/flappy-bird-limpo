import ObjetoValor from "./ObjetoValor"

export interface PontuacaoProps {
    valor?: number
    atributo?: string
}

export default class Pontuacao extends ObjetoValor<Pontuacao> {
    constructor(props: PontuacaoProps) {
        super({ ...props, atributo: props.atributo ?? "pontuação" })
        const { valor, atributo } = this.props
        if (valor == null) {
            throw new Error(`O valor de ${atributo} é obrigatório`)
        }
        if (valor < 0) {
            throw new Error(`O valor de ${atributo} não pode ser negativo`)
        }
    }

    static nova(valor: number, atributo?: string) {
        return new Pontuacao({ valor, atributo })
    }

    incrementar(valor: number = 1): Pontuacao {
        return Pontuacao.nova(this.valor + valor)
    }

    get valor(): number {
        return this.props.valor!
    }

    get atributo(): string {
        return this.props.atributo!
    }
}

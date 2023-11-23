import ObjetoValor from "./ObjetoValor"

export interface PercentualProps {
    valor?: number
    atributo?: string
    min?: number
    max?: number
}

export default class Percentual extends ObjetoValor<Percentual> {
    constructor(props: PercentualProps) {
        super({
            ...props,
            atributo: props.atributo ?? "percentual",
            min: props.min ?? 0,
            max: props.max ?? 1,
        })
        const { valor, atributo, min, max } = this.props
        if (valor == null) throw new Error(`O valor de ${atributo} é obrigatório`)
        if (valor < min! || valor > max!) {
            throw new Error(`O valor de ${atributo} deve ser entre ${min} e ${max}`)
        }
    }

    static novo(valor: number, atributo?: string, min?: number, max?: number) {
        return new Percentual({ valor, atributo, min, max })
    }

    get valor(): number {
        return this.props.valor!
    }

    get atributo(): string {
        return this.props.atributo!
    }

    get min(): number {
        return this.props.min!
    }

    get max(): number {
        return this.props.max!
    }
}

import ObjetoValor from "../shared/ObjetoValor"
import Percentual from "../shared/Percentual"

export interface PassaroProps {
    altura?: number
    largura?: number
    peso?: number
    altitude?: number
    voando?: boolean
}

export default class Passaro extends ObjetoValor<Passaro> {
    readonly altura: Percentual
    readonly largura: Percentual
    readonly peso: Percentual
    readonly altitude: Percentual
    readonly voando: boolean

    constructor(props: PassaroProps) {
        super(props)
        this.altura = Percentual.novo(props.altura!, "altura", 0.01)
        this.largura = Percentual.novo(props.largura!, "largura", 0.01)
        this.peso = Percentual.novo(props.peso ?? 0.003, "peso")
        this.altitude = Percentual.novo(props.altitude!, "altitude")
        this.voando = props.voando ?? false
    }

    voar(): Passaro {
        return this.clone({ voando: true })
    }

    pararDeVoar(): Passaro {
        return this.clone({ voando: false })
    }

    animar(): Passaro {
        const peso = this.voando ? this.peso.valor : -this.peso.valor
        const novaAltitude = this.altitude.valor + peso
        const altitude = Math.max(Math.min(novaAltitude, 1), 0)
        return this.clone({ altitude })
    }
}

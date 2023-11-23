export default class NumeroAleatorio {
    readonly valor: number

    constructor(
        readonly min: number,
        readonly max: number
    ) {
        if (min > max) {
            throw new Error('O valor mínimo deve ser menor que o valor máximo')
        }

        const aleatorio = Math.random() * (max - min) + min
        this.valor = Math.round(aleatorio * 100) / 100
    }
}

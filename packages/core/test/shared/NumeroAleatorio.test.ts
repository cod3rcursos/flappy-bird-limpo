import NumeroAleatorio from '../../src/shared/NumeroAleatorio'

test('Deve gerar um número aleatório', () => {
    const num = new NumeroAleatorio(0.25, 0.75)
    expect(num.valor).toBeGreaterThanOrEqual(0.25)
    expect(num.valor).toBeLessThanOrEqual(0.75)
})

test('Deve gerar erro se min for maior que max', () => {
    expect(() => new NumeroAleatorio(1, 0)).toThrow(
        'O valor mínimo deve ser menor que o valor máximo'
    )
})

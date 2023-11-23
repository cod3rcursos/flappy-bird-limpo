import Pontuacao from "../../src/shared/Pontuacao"

test("Deve criar pontuação maior que zero", () => {
    const p = Pontuacao.nova(2)
    expect(p.valor).toBe(2)
    expect(p.atributo).toBe("pontuação")
})

test("Deve criar pontuação zero", () => {
    const p = Pontuacao.nova(0)
    expect(p.valor).toBe(0)
})

test("Deve incrementar a pontuação", () => {
    const p1 = Pontuacao.nova(0)
    const p2 = p1.incrementar()
    expect(p1.valor).toBe(0)
    expect(p2.valor).toBe(1)
})

test("Deve lançar erro ao criar pontuação nula", () => {
    expect(() => new Pontuacao({})).toThrow(
        "O valor de pontuação é obrigatório",
    )
})

test("Deve lançar erro ao criar pontuação negativa", () => {
    expect(() => Pontuacao.nova(-1)).toThrow(
        "O valor de pontuação não pode ser negativo",
    )
})

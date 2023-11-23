import { Passaro } from "../../src"

const props = {
    altura: 0.05,
    largura: 0.05,
    altitude: 0.5,
    peso: 0.002,
}

test("Deve criar um passaro", () => {
    const p = new Passaro(props)
    expect(p.altura.valor).toBe(0.05)
    expect(p.largura.valor).toBe(0.05)
    expect(p.altitude.valor).toBe(0.5)
    expect(p.peso.valor).toBe(0.002)
    expect(p.voando).toBe(false)
})

test("Deve alterar passaro para voar", () => {
    const p1 = new Passaro({ ...props, peso: undefined })
    const p2 = p1.voar()
    expect(p1.voando).toBe(false)
    expect(p2.voando).toBe(true)
})

test("Deve alterar passaro para parar de voar", () => {
    const p1 = new Passaro({ ...props, voando: true })
    const p2 = p1.pararDeVoar()
    expect(p1.voando).toBe(true)
    expect(p2.voando).toBe(false)
})

test("Deve animar passaro diminuindo a altitude", () => {
    const p1 = new Passaro(props)
    const p2 = p1.animar()
    expect(p2.altitude.valor).toBeLessThan(p1.altitude.valor)
})

test("Deve animar passaro aumentando a altitude", () => {
    const p1 = new Passaro({ ...props, voando: true })
    const p2 = p1.animar()
    expect(p2.altitude.valor).toBeGreaterThan(p1.altitude.valor)
})

test("Deve gerar erro se altitude maior que 1", () => {
    expect(() => new Passaro({ ...props, altitude: 1.1 })).toThrow(
        "O valor de altitude deve ser entre 0 e 1",
    )
})

test("Deve gerar erro se altura maior que 1", () => {
    expect(() => new Passaro({ ...props, altura: 1.1 })).toThrow(
        "O valor de altura deve ser entre 0.01 e 1",
    )
})

test("Deve gerar erro se altura zerada", () => {
    expect(() => new Passaro({ ...props, altura: 0 })).toThrow(
        "O valor de altura deve ser entre 0.01 e 1",
    )
})

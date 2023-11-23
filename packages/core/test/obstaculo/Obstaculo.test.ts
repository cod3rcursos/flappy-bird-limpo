import { Nivel, Obstaculo } from "../../src"

test("Deve criar um obstaculo", () => {
    const obstaculo = Obstaculo.novo({ nivel: Nivel.FACIL, posicao: 0.5 })
    expect(obstaculo.nivel).toBe(Nivel.FACIL)
})

test("Deve diminuir o vão para os níveis mais difíceis", () => {
    const o1 = Obstaculo.novo({ nivel: Nivel.FACIL, posicao: 0.5 })
    const o2 = Obstaculo.novo({ nivel: Nivel.MEDIO, posicao: 0.5 })
    const o3 = Obstaculo.novo({ nivel: Nivel.DIFICIL, posicao: 0.5 })
    const o4 = Obstaculo.novo({ nivel: Nivel.JEDI, posicao: 0.5 })
    expect(o1.vao.valor).toBeGreaterThan(o2.vao.valor)
    expect(o2.vao.valor).toBeGreaterThan(o3.vao.valor)
    expect(o3.vao.valor).toBeGreaterThan(o4.vao.valor)
})

test("Deve animar obstaculo diminuindo a posição", () => {
    const o1 = Obstaculo.novo({ nivel: Nivel.FACIL, posicao: 0.5 })
    const o2 = o1.animar()
    expect(o2.posicao.valor).toBeLessThan(o1.posicao.valor)
})

test("Deve gerar erro quando não informar a posição", () => {
    expect(() => Obstaculo.novo()).toThrow("O valor de posição é obrigatório")
})

test("Deve novo erro ao usar dados incompatíveis", () => {
    const propsIncompativeis = {
        inferior: 0.1,
        superior: 0.1,
        nivel: Nivel.JEDI,
        posicao: 0.5,
        largura: 0.1,
    }

    expect(() => Obstaculo.novo(propsIncompativeis)).toThrow(
        "O vão entre os obstaculos deve ser de 15%",
    )
})

import { EspacoObstaculos, Nivel, Obstaculos } from "../../src"

test("Deve criar obstaculos", () => {
    const obstaculos = Obstaculos.novo()
    expect(obstaculos.itens.length).toBe(5)
    expect(obstaculos.nivel).toBe(Nivel.MEDIO)
    expect(obstaculos.espaco).toBe(EspacoObstaculos.NORMAL)
})

test("Deve animar os obstaculos diminuindo as posições", () => {
    const o1 = Obstaculos.novo()
    const o2 = o1.animar()
    expect(o2.itens[0]!.posicao.valor).toBeLessThan(o1.itens[0]!.posicao.valor)
    expect(o2.itens[1]!.posicao.valor).toBeLessThan(o1.itens[1]!.posicao.valor)
    expect(o2.itens[2]!.posicao.valor).toBeLessThan(o1.itens[2]!.posicao.valor)
    expect(o2.itens[3]!.posicao.valor).toBeLessThan(o1.itens[3]!.posicao.valor)
    expect(o2.itens[4]!.posicao.valor).toBeLessThan(o1.itens[4]!.posicao.valor)
})

test("Deve animar os obstaculos até primeiro mudar para última posição", () => {
    const o1 = Obstaculos.novo()
    const o2 = Array(1100)
        .fill(0)
        .reduce((acc) => acc.animar(), o1)
    const maiorPosicao = Math.max(...o2.itens.map((i: any) => i.posicao.valor))
    expect(o2.itens[0]!.posicao.valor).toBe(maiorPosicao)
})

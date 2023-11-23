import { EspacoObstaculos, Nivel, Obstaculos, Passaro } from "../../src"
import SensorColisao, { RespostaSensorColisao } from "../../src/jogo/SensorColisao"

function propsObstaculos(posicao: number) {
    return {
        nivel: Nivel.FACIL,
        espaco: EspacoObstaculos.NORMAL,
        itens: [
            {
                posicao,
                nivel: Nivel.FACIL,
                inferior: 0.3,
                superior: 0.3,
                largura: 0.1,
            },
        ],
    }
}

const passaro = new Passaro({
    altitude: 0.6,
    largura: 0.04,
    altura: 0.06,
})

test("Deve responder NADA ao aferir os dados pelo sensor", () => {
    const sensor = new SensorColisao()
    const resposta = sensor.aferir(
        passaro,
        Obstaculos.novo(propsObstaculos(0.45)),
        Obstaculos.novo(propsObstaculos(0.44)),
    )

    expect(resposta).toBe(RespostaSensorColisao.NADA)
})

test("Deve responder NADA quando não tiver obstáculo no centro", () => {
    const sensor = new SensorColisao()
    const resposta = sensor.aferir(
        passaro,
        Obstaculos.novo(propsObstaculos(0.2)),
        Obstaculos.novo(propsObstaculos(0.19)),
    )

    expect(resposta).toBe(RespostaSensorColisao.NADA)
})

test("Deve responder PASSOU ao aferir os dados pelo sensor", () => {
    const sensor = new SensorColisao()
    const resposta = sensor.aferir(
        passaro,
        Obstaculos.novo(propsObstaculos(0.45)),
        Obstaculos.novo(propsObstaculos(0.3)),
    )

    expect(resposta).toBe(RespostaSensorColisao.PASSOU)
})

test("Deve responder COLIDIU ao aferir os dados pelo sensor", () => {
    const sensor = new SensorColisao()
    const resposta = sensor.aferir(
        new Passaro({ ...passaro.props, altitude: 0.3 }),
        Obstaculos.novo(propsObstaculos(0.45)),
        Obstaculos.novo(propsObstaculos(0.44)),
    )

    expect(resposta).toBe(RespostaSensorColisao.COLIDIU)
})

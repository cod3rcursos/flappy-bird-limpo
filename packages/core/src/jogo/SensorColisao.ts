import Obstaculo from "../obstaculo/Obstaculo"
import Obstaculos from "../obstaculo/Obstaculos"
import Passaro from "../passaro/Passaro"

export enum RespostaSensorColisao {
    NADA,
    PASSOU,
    COLIDIU,
}

export default class SensorColisao {
    aferir(
        passaro: Passaro,
        obstaculosAnteriores: Obstaculos,
        obstaculos: Obstaculos,
    ): RespostaSensorColisao {
        const obstaculoAnterior = this.obstaculoCruzandoCentro(
            passaro,
            obstaculosAnteriores,
        )
        const obstaculo = this.obstaculoCruzandoCentro(passaro, obstaculos)

        const ocorreuColisao =
            this.detectarColisaoX(passaro, obstaculos) &&
            this.detectarColisaoY(passaro, obstaculos)

        if (ocorreuColisao) {
            return RespostaSensorColisao.COLIDIU
        } else if (obstaculoAnterior && !obstaculo) {
            return RespostaSensorColisao.PASSOU
        } else {
            return RespostaSensorColisao.NADA
        }
    }

    private detectarColisaoX(passaro: Passaro, obstaculos: Obstaculos): boolean {
        const calda = 0.5
        const bico = 0.5 + passaro.largura.valor
        return obstaculos.itens.some((obstaculo) => {
            return (
                obstaculo.posicao.valor <= bico &&
                obstaculo.posicao.valor + obstaculo.largura.valor >= calda
            )
        })
    }

    private detectarColisaoY(passaro: Passaro, obstaculos: Obstaculos): boolean {
        const topo = passaro.altitude.valor + passaro.altura.valor
        const base = passaro.altitude.valor

        const obstaculoCentral = this.obstaculoCruzandoCentro(passaro, obstaculos)!
        const inferior = obstaculoCentral.inferior.valor
        const superior = obstaculoCentral.inferior.valor + obstaculoCentral.vao.valor
        return base <= inferior || topo >= superior
    }

    private obstaculoCruzandoCentro(
        passaro: Passaro,
        obstaculos: Obstaculos,
    ): Obstaculo | null {
        const obstaculoCruzandoCentro =
            obstaculos.itens.filter((obstaculo) => {
                const inicio = obstaculo.posicao.valor
                const fim = obstaculo.posicao.valor + obstaculo.largura.valor
                return inicio <= 0.5 + passaro.largura.valor && fim >= 0.5
            })[0] ?? null
        return obstaculoCruzandoCentro
    }
}

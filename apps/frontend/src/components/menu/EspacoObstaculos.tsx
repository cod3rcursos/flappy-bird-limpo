import { EspacoObstaculos as Espaco } from "core"
import Botao from "./Botao"
import useJogo from "@/data/hook/useJogo"

export default function EspacoObstaculos() {
    const { jogo, reiniciar } = useJogo()
    return (
        <div className="flex flex-col items-center">
            <span className="text-xl">Espaço entre Obstáculos</span>

            <div className="flex">
                <Botao
                    cor={
                        jogo.espaco === Espaco.MAIOR
                            ? "bg-red-500"
                            : "bg-zinc-400"
                    }
                    semBordaDireita
                    onClick={() => reiniciar({ espaco: Espaco.MAIOR })}
                >
                    Maior
                </Botao>

                <Botao
                    cor={
                        jogo.espaco === Espaco.NORMAL
                            ? "bg-red-500"
                            : "bg-zinc-500"
                    }
                    semBorda
                    onClick={() => reiniciar({ espaco: Espaco.NORMAL })}
                >
                    Normal
                </Botao>
                <Botao
                    cor={
                        jogo.espaco === Espaco.MENOR
                            ? "bg-red-500"
                            : "bg-zinc-600"
                    }
                    semBordaEsquerda
                    onClick={() => reiniciar({ espaco: Espaco.MENOR })}
                >
                    Menor
                </Botao>
            </div>
        </div>
    )
}

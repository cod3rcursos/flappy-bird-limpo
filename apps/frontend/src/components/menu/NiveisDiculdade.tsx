import { Nivel } from "core"
import Botao from "./Botao"
import useJogo from "@/data/hook/useJogo"

export default function NiveisDiculdade() {
    const { jogo, reiniciar } = useJogo()
    return (
        <div className="flex flex-col items-center">
            <span className="text-xl">Nível de Dificuldade</span>

            <div className="flex">
                <Botao
                    cor={
                        jogo.nivel === Nivel.FACIL
                            ? "bg-red-500"
                            : "bg-zinc-400"
                    }
                    semBordaDireita
                    onClick={() => reiniciar({ nivel: Nivel.FACIL })}
                >
                    Fácil
                </Botao>
                <Botao
                    cor={
                        jogo.nivel === Nivel.MEDIO
                            ? "bg-red-500"
                            : "bg-zinc-500"
                    }
                    semBorda
                    onClick={() => reiniciar({ nivel: Nivel.MEDIO })}
                >
                    Médio
                </Botao>
                <Botao
                    cor={
                        jogo.nivel === Nivel.DIFICIL
                            ? "bg-red-500"
                            : "bg-zinc-600"
                    }
                    semBorda
                    onClick={() => reiniciar({ nivel: Nivel.DIFICIL })}
                >
                    Difícil
                </Botao>
                <Botao
                    cor={
                        jogo.nivel === Nivel.JEDI
                            ? "bg-red-500"
                            : "bg-zinc-700"
                    }
                    semBordaEsquerda
                    onClick={() => reiniciar({ nivel: Nivel.JEDI })}
                >
                    Jedi
                </Botao>
            </div>
        </div>
    )
}

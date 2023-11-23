import Botao from "./Botao"
import useJogo from "@/data/hook/useJogo"

export default function VelocidadeJogo() {
    const { velocidade, alterarVelocidade } = useJogo()
    return (
        <div className="flex flex-col items-center">
            <span className="text-xl">Velocidade do Jogo</span>

            <div className="flex">
                <Botao
                    cor={velocidade === 20 ? "bg-red-500" : "bg-zinc-400"}
                    semBordaDireita
                    onClick={() => alterarVelocidade(20)}
                >
                    Lento
                </Botao>
                <Botao
                    cor={velocidade === 10 ? "bg-red-500" : "bg-zinc-500"}
                    semBorda
                    onClick={() => alterarVelocidade(10)}
                >
                    Normal
                </Botao>
                <Botao
                    cor={velocidade === 6 ? "bg-red-500" : "bg-zinc-600"}
                    semBorda
                    onClick={() => alterarVelocidade(6)}
                    className={`${velocidade === 6 && "bg-red-500"}`}
                >
                    Rápido
                </Botao>
                <Botao
                    cor={velocidade === 3 ? "bg-red-500" : "bg-zinc-700"}
                    semBordaEsquerda
                    onClick={() => alterarVelocidade(3)}
                >
                    Jedi
                </Botao>
            </div>
        </div>
    )
}

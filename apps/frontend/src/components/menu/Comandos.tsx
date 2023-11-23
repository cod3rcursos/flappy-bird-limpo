import Botao from "./Botao"
import useJogo from "@/data/hook/useJogo"

export default function Comandos() {
    const { pausado, reiniciar, zerar, alternarPausado } = useJogo()
    return (
        <div className="flex flex-col items-center">
            <span className="text-xl">Comandos</span>

            <div className="flex">
                <Botao
                    cor={pausado ? "bg-red-500" : "bg-purple-500"}
                    semBordaDireita
                    onClick={() => alternarPausado()}
                >
                    Pausar
                </Botao>
                <Botao
                    cor="bg-purple-600"
                    semBorda
                    onClick={() => reiniciar()}
                >
                    Reiniciar
                </Botao>
                <Botao cor="bg-purple-700" semBordaEsquerda onClick={zerar}>
                    Zerar
                </Botao>
            </div>
        </div>
    )
}

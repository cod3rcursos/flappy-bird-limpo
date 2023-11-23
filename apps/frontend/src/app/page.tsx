"use client"

import Canos from "@/components/jogo/Canos"
import Passaro from "@/components/jogo/Passaro"
import Comandos from "@/components/menu/Comandos"
import EspacoObstaculos from "@/components/menu/EspacoObstaculos"
import NiveisDiculdade from "@/components/menu/NiveisDiculdade"
import VelocidadeJogo from "@/components/menu/VelocidadeJogo"
import useJogo from "@/data/hook/useJogo"

export default function Home() {
    const { jogo, obstaculos } = useJogo()
    return (
        <main className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl">
                <span className="text-red-400">Flappy</span>
                <span className="text-green-400"> Bird</span>
                <span className="text-blue-400"> Limpo</span>
            </h1>
            <div className="flex p-5 justify-between gap-5">
                <VelocidadeJogo />
                <NiveisDiculdade />
                <EspacoObstaculos />
                <Comandos />
            </div>
            <div
                className="
                	flex w-4/6 h-4/6
                    relative overflow-hidden
                    bg-background bg-no-repeat bg-cover
                	bg-blue-400 border-4 border-blue-500
                "
            >
                <Passaro />
                {obstaculos.itens.map((obstaculo, i) => (
                    <Canos
                        key={i}
                        superior={obstaculo.superior.valor}
                        inferior={obstaculo.inferior.valor}
                        largura={obstaculo.largura.valor}
                        posicao={obstaculo.posicao.valor}
                    />
                ))}
            </div>
        </main>
    )
}

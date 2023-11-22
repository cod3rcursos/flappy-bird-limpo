import { somar } from "core"

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-black text-3xl text-zinc-400">Usando Core</h1>
            <span className="font-black text-7xl">{somar(1, 2)}</span>
        </main>
    )
}

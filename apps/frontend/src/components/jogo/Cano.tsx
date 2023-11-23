import { useEffect, useState } from "react"

export interface CanoProps {
    cima?: boolean
    tamanho: number
}

export default function Cano(props: CanoProps) {
    const [noBrowser, setNoBrowser] = useState(false)

    useEffect(() => {
        setNoBrowser(true)
    }, [])
    
    return noBrowser ? (
        <div
            style={{ height: `${props.tamanho * 100}%` }}
            className={`
                flex items-center
                ${props.cima ? "flex-col" : "flex-col-reverse"}
            `}
        >
            <div
                className="
                    h-full w-11/12 border-l-2 border-r-2 border-black
                    bg-gradient-to-r from-green-400 to-green-700
                "
            ></div>
            <div
                className="
                    w-full h-8 border-2 border-black
                    bg-gradient-to-r from-green-400 to-green-700
                "
            ></div>
        </div>
    ) : (
        ""
    )
}

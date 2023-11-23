import { useRef } from "react"

export interface BotaoProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    cor: string
    semBorda?: boolean
    semBordaEsquerda?: boolean
    semBordaDireita?: boolean
}

export default function Botao(props: BotaoProps) {
    const buttonRef = useRef<HTMLButtonElement | null>(null)
    return (
        <button
            ref={buttonRef}
            className={`flex items-center outline-none ${props.className ?? ""}`}
            onClick={(e) => {
                props.onClick?.(e)
                buttonRef.current?.blur()
            }}
        >
            {props.semBordaEsquerda || props.semBorda ? null : (
                <>
                    <div className={`${props.cor} h-3 w-1`}></div>
                    <div className={`${props.cor} h-5 w-1`}></div>
                    <div className={`${props.cor} h-7 w-1`}></div>
                </>
            )}
            <div className={`${props.cor} h-8 px-2`}>
                <span className="text-2xl">{props.children}</span>
            </div>
            {props.semBordaDireita || props.semBorda ? null : (
                <>
                    <div className={`${props.cor} h-7 w-1`}></div>
                    <div className={`${props.cor} h-5 w-1`}></div>
                    <div className={`${props.cor} h-3 w-1`}></div>
                </>
            )}
        </button>
    )
}

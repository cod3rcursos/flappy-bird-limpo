import image from "../../../public/passaro.png"
import Image from "next/image"
import useDimensoesElemento from "@/data/hook/useDimensoesElemento"
import useJogo from "@/data/hook/useJogo"

export interface PassaroProps {
    className?: string
}

export default function Passaro(props: PassaroProps) {
    const { passaro } = useJogo()
    const { elementoRef, altura, largura } = useDimensoesElemento()

    const pAltura = passaro.altura.valor
    const pLargura = passaro.largura.valor
    const bottom = passaro.altitude.valor * altura

    return (
        <div ref={elementoRef} className="relative w-full h-full z-50">
            <div
                style={{
                    bottom: bottom > 0 ? bottom : 0,
                    height: altura * pAltura,
                    width: largura * pLargura,
                    left: largura / 2,
                }}
                className={`absolute ${props.className ?? ""}`}
            >
                <Image src={image} alt="Passaro" className="h-full w-full" />
            </div>
        </div>
    )
}

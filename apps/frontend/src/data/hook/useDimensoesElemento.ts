import { useState, useEffect, useRef } from 'react'

export default function useDimensoesElemento() {
    const elementoRef = useRef<any>()

    const [altura, setAltura] = useState(0)
    const [largura, setLargura] = useState(0)

    useEffect(() => {
        elementoRef.current && new ResizeObserver(_ => {
            setAltura(elementoRef.current?.clientHeight ?? 0)
            setLargura(elementoRef.current?.clientWidth ?? 0)
        }).observe(elementoRef.current)
    }, [elementoRef])

    return {
        elementoRef,
        altura,
        largura,
    }
}
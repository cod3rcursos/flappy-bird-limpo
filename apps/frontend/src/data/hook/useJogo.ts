import { useContext } from "react"
import ContextoJogo from "../context/ContextoJogo"

const useJogo = () => useContext(ContextoJogo)
export default useJogo

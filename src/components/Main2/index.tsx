import "./style.scss"
import logo from "../../assets/logo2.svg"
import { FormInscrever } from "../Form-Inscrever"

export function Main2() {
    return(
        <main>
            <img src={logo} alt="Menina ouvindo musica" />  
            <FormInscrever />
        </main>
    )
}
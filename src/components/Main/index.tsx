import "./style.scss"
import logo from "../../assets/logo2.svg"
import { FormLogin } from "../Form-Login"

export function Main() {
    return(
        <main>
            <img src={logo} alt="Menina ouvindo musica" />  
            <FormLogin />
        </main>
    )
}
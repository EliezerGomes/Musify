import { Button } from "../Button"
import { Input } from "../Input"
import google from "../../assets/google.svg"
import "./style.scss"

export function FormLogin() {
    return(
        <div className="form-container">
            <h1>Faça o login e aproveite!</h1>

            <form>
                <Input placeHolder="email"/>
                <Input placeHolder="senha"/>
                <Button texto="Login"/>
            </form>

            <div className="main">
                <hr className="linha-esquerda"/>
                <h5>ou</h5>
                <hr className="linha-direita"/>
            </div>

            <div className="footer">
                <img src={google} alt="google"/>
            </div>
        </div>
    )
}
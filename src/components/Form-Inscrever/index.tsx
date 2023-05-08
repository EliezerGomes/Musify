import { Button } from "../Button"
import { Input } from "../Input"
import google from "../../assets/google.svg"
import "./estilo.scss"

export function FormInscrever() {
    return(
        <div className="form-container">
            <h1>Faça o login e aproveite!</h1>

            <form>
                <Input placeHolder="usuário"/>
                <Input placeHolder="email"/>
                <Input placeHolder="senha"/>
                <Button texto="Inscrever"/>
            </form>

            <div className="main">
                <hr className="linha-esquerda"/>
                <h5>ou</h5>
                <hr className="linha-direita"/>
            </div>

            <div className="footer">
                <a href="#">
                    <img src={google} alt="google"/>
                </a>
                
            </div>
        </div>
    )
}
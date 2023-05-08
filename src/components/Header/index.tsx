import logo from "../../assets/logo.svg"
import title from "../../assets/title.svg"
import "./style.scss"

interface IText {
    texto: string
}

export function Header({texto}: IText) {
    return(
        <header>
            <div className="div">
                <img className="logo" src={logo} alt="Logo" />
                <img className="title" src={title} alt="MUSIFY" />
            </div>

            <button>{texto}</button>
            
        </header>
        
    )
}
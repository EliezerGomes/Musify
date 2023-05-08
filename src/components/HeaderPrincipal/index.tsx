import logo from "../../assets/logo.svg"
import title from "../../assets/title.svg"
import "./style.scss"

export function HeaderPrinci() {
    return(
        <header>
            <div className="div">
                <img className="logo" src={logo} alt="Logo" />
                <img className="title" src={title} alt="MUSIFY" />
            </div>
  
        </header>
        
    )
}
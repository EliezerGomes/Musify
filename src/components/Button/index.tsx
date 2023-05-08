import "./style.scss"

interface IText {
    texto: string
}

export function Button({texto}: IText) {
    return(
        <button>{texto}</button>
    )
}
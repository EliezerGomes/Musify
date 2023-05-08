import "./style.scss"

interface IDates {
    placeHolder: string
}

export function Input({placeHolder}: IDates) {
    return(
        <input type="text" placeholder={placeHolder} />
    )
}
import { buttonBackground } from "./constants"

export const Button = ({ type, text, onClick }) => {
    const btnClassName = buttonBackground[type]

    return (
        <button onClick={onClick} className={btnClassName}>
            {text}
        </button>
    )
}
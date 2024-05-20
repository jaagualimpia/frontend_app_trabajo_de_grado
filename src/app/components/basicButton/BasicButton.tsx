import "./BasicButtonStyle.css"

interface BasicButtonProps {
    text: string
}

export const BasicButton = ({text}: BasicButtonProps) =>{
    return (
        <>
            <button className="basic-button fw-bold">{text}</button>
        </>
    )
}
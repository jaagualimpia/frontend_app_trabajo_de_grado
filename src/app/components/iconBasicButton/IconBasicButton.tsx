import "./IconBasicButtonStyle.css"

interface IconBasicButtonProps {
    text: string
    src: string
    click: () => void
}

export const IconBasicButton = ({ text, src, click}: IconBasicButtonProps) => {
    return (
        <>
            <button className="icon-basic-button" onClick={click}>
                <img src={src} alt="Icono Diagnóstico" className="icon"/>
                    {text}
            </button>
        </>
    )
}
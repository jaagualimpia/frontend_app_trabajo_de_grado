import "./Loader.css"

export const LoaderComponent = () => {
    return (
        <div className="loader-container">
            <div className="loader-overlay">
                <div className="loader">
                    <div className="loader-inner" />
                    <div className="loader-inner" />
                    <div className="loader-inner" />
                </div>
            </div>
        </div>
    )
}
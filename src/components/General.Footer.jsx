export function GeneralFooter () {
    return (
        <footer className="w3-row w3-light-gray w3-container w3-padding-16" style={ {alignItems: 'center', display: 'flex'} }>
            <div className="w3-half w3-center">
                <h1 className="fs-2">Síguenos en redes</h1>
            </div>
            <div className="w3-half w3-center">
                <a className="w3-hover-text-black w3-padding-small" href="#">
                    <i className="fab fa-facebook-square fa-2x"></i>
                </a>
                <a className="w3-hover-text-black w3-padding-small" href="#">
                    <i className="fab fa-instagram-square fa-2x"></i>
                </a>
            </div>
        </footer>
    )
}
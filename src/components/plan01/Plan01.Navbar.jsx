import { Link } from "react-router-dom"


export function Plan01Navbar () {

    const navElements = [
        {
            title:      'Promociones',
            path:       '#promotions'
        },{
            title:      'Menú',
            path:       '#menu'
        },{
            title:      'Contacto',
            path:       '#contact'
        }
    ]

    return (
        <nav className="w3-top">
            <div className="container">
                <div className="w3-bar w3-blue-gray">
                    <div className="w3-bar-item">
                        <a className="w3-button w3-wide text-uppercase" href="#home">Home</a>
                    </div>
                    <div className="w3-right p-2">
                        { navElements.map( (navElement, index) => (
                            <a key={index} href={navElement.path} className="w3-bar-item w3-button">{navElement.title}</a>
                        ) ) }
                    </div>
                </div>
            </div>
        </nav>
    )
}
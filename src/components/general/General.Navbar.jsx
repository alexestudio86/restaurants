import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


export function GeneralNavbar () {

    const sections = [
        {
            name:   'Home',
            icon:   'fa-solid fa-house',
            url:    '/'
        },
        {
            name:   'Servicios',
            icon:   'fa-solid fa-bell-concierge',
            url:    '/servicios'
        },{
            name:   'Planes',
            icon:   'fa-solid fa-list-check',
            url:    '/planes'
        },{
            name:   'Paquetes',
            icon:   'fa-solid fa-cube',
            url:    '/paquetes'
        },{
            name:   'Contacto',
            icon:   'fa-solid fa-headset',  
            url:    '/contact'
        }
    ]

    return (
        <div className="w3-top theme section" id="navbar">
            <div className="w3-row w3-bar w3-light-grey w3-large navbar">
                { sections.map( (section, index) => (
                    <Link key={index} className="w3-bar-item w3-button w3-block" to={"/"} style={ {width: '20%'} }>
                        <span className="w3-hide-small">{section.name}</span>
                        <span className="w3-hide-medium w3-hide-large"><FontAwesomeIcon icon={section.icon}/></span>
                    </Link>
                ) ) }
            </div>
        </div>
    )
}
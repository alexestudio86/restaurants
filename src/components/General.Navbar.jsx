import { Link } from "react-router-dom"


export function GeneralNavbar () {

    const sections = [
        {
            name:   'Home',
            url:    '/'
        },
        {
            name:   'Servicios',
            url:    '/servicios'
        },{
            name:   'Planes',
            url:    '/planes'
        },{
            name:   'Paquetes',
            url:    '/paquetes'
        },{
            name:   'Contacto',
            url:    '/contact'
        }
    ]

    return (
        <div className="w3-top theme section" id="navbar">
            <div className="w3-row w3-bar w3-light-grey w3-large navbar">
                { sections.map( (section, index) => (
                    <Link key={index} className="w3-bar-item w3-button w3-block" to={"/"} style={ {width: '20%'} }>{section.name}</Link>
                ) ) }
            </div>
        </div>
    )
}
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCarContext } from '../../../context/plans/CarBasicProvider';
import './planBasic01.navbar.css';


export function PlanBasic01Navbar ( {setSidebarLeftShow} ) {

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

    const car = useCarContext();
    const [totalItems, setTotalItems] = useState(0);

    useEffect( () => {
        car.length > 0 ? setTotalItems(
                Array.from( car.map( c => {
                    return Array.from( c.variants.map( (v,i) => {
                        if( i !== 1 ){
                            return 1
                        }
                        return i
                    } ) ).reduce( (x,y) => x+y )
                } ) ).reduce( (a,b) => a+b )
            )
        : setTotalItems(0)
    },[car])

    return (
        <nav className="ae86-sticky-top">
            <div className="w3-row p-0 container">
                <div className="w3-bar w3-blue-gray">
                    <div className="w3-hide-medium">
                        <button className="w3-button w3-teal w3-xlarge w3-left w3-hide-large" onClick={ () => setSidebarLeftShow(true) } >
                            <FontAwesomeIcon icon="fa-solid fa-burger" />
                        </button>
                        <button className="w3-button w3-teal w3-xlarge w3-right w3-hide-large">
                            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                            <span className="w3-badge">{ totalItems }</span>
                        </button>
                    </div>
                    <div className="w3-hide-small">
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
            </div>
        </nav>
    )
}
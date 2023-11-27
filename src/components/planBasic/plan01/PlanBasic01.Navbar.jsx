import React, { useState, useEffect } from "react";
import { navElements } from "./planBasic01.NavElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCarContext } from '../../../context/plans/CarBasicProvider';
import './planBasic01.navbar.css';


export function PlanBasic01Navbar ( {sidebarLeftShow, setSidebarLeftShow, sidebarRightShow, setSidebarRightShow} ) {

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
        <nav id="navbar" className="ae86-sticky-top" style={ {zIndex: 1} }>
            <div className="w3-row p-0 container">
                <div className="w3-bar w3-blue-gray">
                    <div className="w3-hide-medium">
                        <button className={`w3-button w3-xlarge w3-left w3-hide-large ${!sidebarRightShow && 'w3-teal'}`} disabled={sidebarRightShow} onClick={ () => {
                            if( !document.body.style.overflow ){
                                setSidebarLeftShow(true);
                                document.body.style.setProperty('overflow', 'hidden')
                            }
                        } } >
                            <FontAwesomeIcon icon="fa-solid fa-burger" />
                        </button>
                        <button className={`w3-button w3-xlarge w3-right w3-hide-large ${sidebarRightShow ? 'w3-light-gray' : 'w3-teal'}`} onClick={ () => {
                            setSidebarRightShow(!sidebarRightShow);
                            if( sidebarRightShow ){
                                document.body.style.removeProperty('overflow')
                            }else{
                                document.body.style.setProperty('overflow', 'hidden')
                            }
                        } }>
                            <FontAwesomeIcon icon={`fa-solid ${sidebarRightShow ? 'fa-circle-arrow-right' : 'fa-cart-shopping'}`} />
                            <span className="w3-badge w3-small">{ totalItems }</span>
                        </button>
                    </div>
                    <div className="w3-hide-small">
                        <div className="w3-bar-item">
                            <a className="w3-button w3-wide text-uppercase" href="#home">Home</a>
                        </div>
                        <div className="w3-right p-2">
                            { navElements.map( (navElement, index) => (
                                index > 0 && <a key={index} href={navElement.path} className="w3-bar-item w3-button">{navElement.title}</a>
                            ) ) }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
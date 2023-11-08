import { useState } from "react"


export function GeneralModal ( {idxPkg, value, setModal} ) {

    const pages = [
        {
            title: 'Página 01'
        },{
            title: 'Página 02'
        }
    ]

    return (
        <div className={`w3-modal ${value && 'w3-show'}`}>
            <div className="w3-modal-content w3-animate-top">
                xyz
                <button onClick={ () => setModal(false)}>Soy un botón</button>
            </div>
        </div>
    )
}
import { useState } from "react";
import { GeneralPlans } from "./General.Plans";


export function GeneralPlansModal ( {idxPkg, value, setModal} ) {
    return (
        <div className={`w3-modal ${value && 'w3-show'}`}>
            <div className="w3-modal-content w3-animate-top">
                <button className="w3-button w3-large w3-black w3-display-topright" onClick={ () => setModal(false)} style={ {zIndex: 5} }>×</button>
                <div className="w3-row">
                    <GeneralPlans idxPkg={idxPkg} />
                </div>
            </div>
        </div>
    )
}
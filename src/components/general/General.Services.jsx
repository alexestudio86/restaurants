import { useState } from 'react';
import './general.services.css';
import { packagesOptions } from './packagesOptions.js';
import { GeneralPlansModal } from './General.PlansModal';


export function GeneralServices () {



    const [indexPackage, setIndexPackage] = useState(0);
    const [modal, setModal] = useState(false)

    return (
        <>
            <div className="mt-5">
                <h1 className="w3-xxlarge uppercase py-5 text-uppercase">Soluciones para Restaurantes</h1>
                <div className='w3-row'>
                    { packagesOptions.map( (product, index) => (                    
                        <div key={index} className='w3-col s4' style={ {height: 'auto'} } >
                            <div className='w3-cell-row' href='#' style={ { textDecoration: 'none', height: '100%'} }>
                                <div className='w3-cell w3-cell-middle' style={ {backgroundColor: '#f1f1f1'} }>
                                    <button className={`w3-button w-100 w3-xlarge ${ indexPackage == index && product.color }`} onClick={ () => (
                                        setIndexPackage(index)
                                    )} >{product.title}</button>
                                </div>
                            </div>
                        </div>
                    ) ) }
                </div>
                <ul className="w3-row w3-ul w3-border w3-center w3-light-gray">
                    <div className="w3-half w3-padding-small w3-white">
                        {
                            packagesOptions[indexPackage].features.map( (product, idx) => (
                                idx < packagesOptions[indexPackage].features.length / 2 && <li key={idx} className="w3-padding-16">{product}</li>
                            ) )
                        }
                    </div>
                    <div className="w3-half w3-padding-small w3-white">
                        {
                            packagesOptions[indexPackage].features.map( (product, idx) => (
                                idx > packagesOptions[indexPackage].features.length / 2 && <li key={idx} className="w3-padding-16">{product}</li>
                            ) )
                        }
                    </div>
                    <button className={`w3-button w3-col s12 gray-two w3-padding-24 ${ packagesOptions[indexPackage].color }`} onClick={ () => (
                        setModal(true)
                    )}>Demo</button>
                </ul>
            </div>
            <GeneralPlansModal idxPkg={indexPackage} value={modal} setModal={setModal} />
        </>
    )
}
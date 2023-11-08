import { useState, useEffect } from 'react';
import GeneralHeader01 from '../assets/General.Header01.jpg';
import GeneralHeader02 from '../assets/General.Header02.jpg';
import GeneralHeader03 from '../assets/General.Header03.jpg';


export function GeneralSlideshow () {

    const [count, setCount] = useState(0);

    useEffect( () => {
        const interval = setInterval( () => {
            if( count == 0){
                setCount(1)
            }else if (count == 1){
                setCount(2)
            }else{
                setCount(0)
            }
        }, 4000)
        return () => clearInterval(interval)
    },[count] )

    return (
        <div className="mt-5">
            <h1 className="w3-xxlarge uppercase bold py-5 text-uppercase">Restaurantes</h1>
            <div className={`w3-display-container w3-animate-opacity w3-hide ${count == 0 ? 'w3-show' : ''}`} >
                <img className='w-100' src={GeneralHeader01} alt="Ideas para ti" width='1024px' height='480px' style={ {objectFit: 'cover'} } />
                <div className="w3-display-topleft w3-container w3-padding-32">
                    <span className='w3-padding-large w3-animate-top w3-white'>Ideas para ti</span>
                </div>
            </div>
            <div className={`w3-display-container w3-animate-opacity w3-hide ${count == 1 ? 'w3-show' : ''}`} >
                <img className='w-100' src={GeneralHeader02} alt="Acerca de" width='1024px' height='480px' style={ {objectFit: 'cover'} } />
                <div className="w3-display-topleft w3-container w3-padding-32">
                    <span className='w3-padding-large w3-animate-top w3-white'>Acerca de</span>
                </div>
            </div>
            <div className={`w3-display-container w3-animate-opacity w3-hide ${count == 2 ? 'w3-show' : ''}`} >
                <img className='w-100' src={GeneralHeader03} alt="Servicios" width='1024px' height='480px' style={ {objectFit: 'cover'} } />
                <div className="w3-display-topleft w3-container w3-padding-32">
                    <span className='w3-padding-large w3-animate-top w3-white'>Servicios</span>
                </div>
            </div>
            <div className='w3-row w3-padding-small w3-dark-grey w3-xlarge'>
                <div className="w3-left">
                    <button className='fa fa-arrow-circle-left w3-hover-text-teal' onClick={ () => {
                        count > 0 ? setCount(count-1) : setCount(2)
                    } }></button>
                </div>
                <div className="w3-right">
                    <button className='fa fa-arrow-circle-right w3-hover-text-teal' onClick={ () => {
                        count < 2 ? setCount(count+1) : setCount(0)
                    } }></button>
                </div>
                <div className="w3-center">
                    <span className='p-1'>
                        <button className={`w3-tag w3-border w3-transparent w3-hover-white ${count == 0 ? 'w3-white' : ''}`} onClick={() => {
                            setCount(0)
                        } }></button>
                    </span>
                    <span className="p-1">
                        <button className={`w3-tag w3-border w3-transparent w3-hover-white ${count == 1 ? 'w3-white' : ''}`} onClick={() => {
                            setCount(1)
                        } }></button>
                    </span>
                    <span className='p-1'>
                        <button className={`w3-tag w3-border w3-transparent w3-hover-white ${count == 2 ? 'w3-white' : ''}`} onClick={() => {
                            setCount(2)
                        } }></button>
                    </span>
                </div>
            </div>
        </div>
    )
}
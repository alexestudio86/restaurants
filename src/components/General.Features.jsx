import { useState } from 'react';
import GPImage01 from '../assets/General.Plans01.jpg';
import GPImage02 from '../assets/General.Plans02.jpg';


export function GeneralPlanes () {

    const plans = [
        {
            tab:           'Starters',
            title:          'Plan Starters',
            price:          'Desde $799 mxn',
            description:    'Plan dedicado para un crecimiento orgánico en el que puedes tener presencia en las redes sociales con estos planes asequibles y que le pueden dar a tu negocio un incremento en ventas sin descapitalizarte',
            picture:        GPImage01
        },        {
            tab:           'Level Up',
            title:          'Level Up',
            price:          'Planes súper personalizados',
            description:    'Llevamos tu negocio a otro nivel, posicionándolo en las redes sociales, con un diseño en tendencia y de calidad que te represente. Posicionar tu marca en las redes sociales ya no es más un trabajo para novatos, es un trabajo que requiere de profesionales',
            picture:        GPImage02
        }
    ]

    const [tab, setTab ] = useState(0)

    return (
        <>
            <div className='w3-padding-64 w3-center'>
                <h1 className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16" style={ {display: 'initial'} }>Planes</h1>
            </div>
            <div className='w3-padding-64'>
                <div className="w3-row">
                        { plans.map( (plan, index) => (
                            <div key={index}>
                                <button className={`w3-border w3-button w3-half ${tab == index ? 'w3-light-gray' : ''}`} onClick={ () => {
                                    setTab(index)
                                } }>{ plan.tab }</button>
                            </div>
                        ) ) }
                </div>
                { plans.map( (plan, index) => (
                    <div key={index} className={`w3-row w3-padding w3-border w3-animate-opacity w3-hide ${ tab == index ? 'w3-show' : '' }`}>
                        <div className="w3-col m4">
                            <img className="w-100" src={plan.picture} alt={plan.title} width='200' height='250' style={ {objectFit: 'cover'} } />
                        </div>
                        <div className="w3-rest w3-padding">
                            <h3 className="fs-3 fw-bold">{plan.title}</h3>
                            <div className='w3-padding-16'>
                                <span className='fw-bold'>{plan.price}</span>
                            </div>
                            <p>{plan.description}</p>
                        </div>
                    </div>
                ) ) }
            </div>
        </>
    )
}
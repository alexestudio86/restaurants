import { useLoaderData } from 'react-router-dom';
import logo from '../../../assets/planPremium/plan01/logo-costillas.png';
import './planPremium01.header.css';


export function PlanPremium01Header () {

    const {title, subtitle} = useLoaderData();

    return (
        <header className="w3-row bg-img container" id="header">
            <div className="w3-cell-row h-100">
                <div className="w3-cell w3-cell-middle vh-100 w3-center">
                    <div>
                        <h1 className='w3-jumbo w3-text-white'>{title.$t}</h1>
                        <h2 className='w3-large w3-text-white'>{subtitle.$t}</h2>
                    </div>
                </div>
                <div className='w3-cell w3-cell-middle h-100 w3-center'>
                    <img className='w3-padding w3-round-xlarge w3-opacity-min w3-white' src={logo} alt="Logo Costillas" />
                </div>
            </div>
        </header>
    )
}
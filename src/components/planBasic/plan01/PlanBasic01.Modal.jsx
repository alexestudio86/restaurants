
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useUpdateCarContext} from '../../../context/plans/CarBasicProvider'
import './planBasic01.modal.css';


export function PlanBasic01Modal ({modal, setModal}) {

    const updateCar = useUpdateCarContext();

    return (
        <div className={`w3-display-container w3-overlay ${modal.showModal ? 'w3-show': ''}`}>
            <dialog className='w3-display-middle w3-animate-opacity' id="modal" open={modal.showModal ? true : false} >
                <header className='w3-blue-gray'>
                    <button type='button' className="w3-button w3-display-topright" onClick={ () => {
                        setModal({
                            ...modal,
                            showModal: false
                        })
                    }}>
                        <FontAwesomeIcon icon={`fa-solid fa-xmark`} />
                    </button>
                    <h2 className='w3-padding-small text-uppercase'>¿Desea eliminar éste elemento?</h2>
                </header>
                <div className="w3-padding w3-center">
                    <button className='w3-button w3-gray' onClick={ () => {
                        //Extract data
                        const {itemId, vIdx} = modal;
                        updateCar(
                            {
                                actionType: 'DELETE_ITEM'
                            },{
                                id:     itemId,
                                vIdx:   vIdx
                            }
                        );
                        setModal({
                            ...modal,
                            showModal:  false
                        })
                    }}>Confirmar</button>
                </div>
            </dialog>
        </div>
    )
}
import { useState } from "react";
import { useCarContext, useTotalItemsContext, useUpdateCarContext } from "../../../context/plans/CarBasicProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function PlanbBasic01SidebarRight ( {sidebarRightShow, setModal} ) {

    //Hool fpr retrieve Car
    const car = useCarContext();
    //Hook for retrive total Items
    const totalItems    =   useTotalItemsContext();
    //Hook for update car
    const updateCar   =   useUpdateCarContext();

    return (
        <div className={`w3-sidebar w3-animate-right w3-bar-block w-100 ${sidebarRightShow ? '' : 'w3-hide '}`} >
            <h1 className="w3-center text-uppercase fw-bold w3-padding">{ car.length < 1 ? 'Tu Carrito está vació' : <>Carrito ({totalItems})</> }</h1>
            <div className="w3-padding-small">
                <ul className="w3-ul w3-border">
                    { car.map( (c, idx) =>
                        c.variants.map( (v,i) =>
                            <li key={idx} className="w3-bar w3-padding-small">
                                <h1 className="w3-left">{`${c.name} ${v.vName}`}</h1>
                                <div className="w3-right">
                                    {v.vQuantity < 2
                                    ? <button className="w3-button w3-light-gray w3-text-red" onClick={ () => {
                                        setModal({
                                            ...modal,
                                            showModal:  true,
                                            itemId:     c.id,
                                            vIdx:       i
                                        })
                                    }}>
                                        <FontAwesomeIcon icon="fa-solid fa-trash" />
                                    </button>
                                    : <button className="w3-button w3-light-gray" onClick={ () => {
                                        updateCar(
                                            {actionType: 'CHECK_ITEM'},
                                            {
                                                id:         c.id,
                                                name:       c.name,
                                                category:   c.category,
                                                picture:    c.picture,
                                                variants:   [
                                                    {
                                                        vName:      v.vName,
                                                        vPicture:   v.vPicture,
                                                        vPrice:     v.vPrice,
                                                        vDiscount:  v.vDiscount,
                                                        vQuantity:  v.vQuantity-1
                                                    }
                                                ]
                                            }
                                        );
                                    }}>−</button>
                                    }
                                    <span className="w3-padding">{v.vQuantity}</span>
                                    <button className="w3-button w3-light-gray" onClick={ () => {
                                        if( v.vQuantity <= 50 ){
                                            updateCar(
                                                {actionType: 'CHECK_ITEM'},
                                                {
                                                    id:         c.id,
                                                    name:       c.name,
                                                    category:   c.category,
                                                    picture:    c.picture,
                                                    variants:   [
                                                        {
                                                            vName:      v.vName,
                                                            vPicture:   v.vPicture,
                                                            vPrice:     v.vPrice,
                                                            vDiscount:  v.vDiscount,
                                                            vQuantity:  v.vQuantity+1
                                                        }
                                                    ]
                                                }
                                            );
                                        }
                                    }}>+</button>
                                </div>
                            </li>
                        )
                    ) }
                </ul>
            </div>
        </div>
    )
}
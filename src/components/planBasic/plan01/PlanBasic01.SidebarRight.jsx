import { useCarContext } from "../../../context/plans/CarBasicProvider"


export function PlanbBasic01SidebarRight ( {sidebarRightShow} ) {

    const car = useCarContext();
    console.log(car)

    return (
        <div className={`w3-sidebar w3-animate-right w3-bar-block w-100 ${sidebarRightShow ? '' : 'w3-hide '}`} >
            <h1 className="w3-center">{ `${car.length < 1 ? 'Tu Carrito está vació' : 'Carrito'}`}</h1>
                { car.map( (c, i) =>
                <div key={i} className="w3-row w3-padding-small">
                    <div className="w3-light-gray w3-col s12">
                        {c.name}
                    </div>
                </div>
                ) }
        </div>
    )
}
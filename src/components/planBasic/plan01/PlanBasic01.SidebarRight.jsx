export function PlanbBasic01SidebarRight ( {sidebarRightShow} ) {
    return (
        <div className={`w3-sidebar w3-animate-right w3-bar-block w-100 ${sidebarRightShow ? '' : 'w3-hide '}`} >
            <h1>Carrito</h1>
            <div className="w3-row">
                <div className="w3-col s6">
                    1
                </div>
                <div className="w3-col s6">
                    2
                </div>
            </div>
        </div>
    )
}
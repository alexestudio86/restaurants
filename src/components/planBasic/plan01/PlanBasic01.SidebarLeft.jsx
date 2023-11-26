import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function PlanBasic01SidebarLeft ( {sidebarLeftShow, setSidebarLeftShow} ) {
    return (
        <div id="sidebar-left" data-bs-backdrop="static" className={`w3-overlay w3-animate-opacity ${sidebarLeftShow ? 'w3-show' : ''}`} >
            <div className="w3-sidebar w3-animate-left w3-transparent w3-bar-block w3-cell-row" style={ {width: 'auto'} } >
                <div className="w3-cell w3-cell-middle">
                    <div className="w3-round-large w3-white" style={ {padding: '0px 4px 0px 0px'} }>
                        <button className="w3-bar-item w3-button w3-xlarge" onClick={ () => {
                            setSidebarLeftShow(false);
                            document.body.style.removeProperty('overflow')
                        } }>
                            <FontAwesomeIcon icon="fa fa-home" />
                        </button>
                        <button className="w3-bar-item w3-button w3-xlarge">
                            <FontAwesomeIcon icon="fa fa-search" />
                        </button>
                        <button className="w3-bar-item w3-button w3-xlarge">
                            <FontAwesomeIcon icon="fa fa-envelope" />
                        </button>
                        <button className="w3-bar-item w3-button w3-xlarge">
                            <FontAwesomeIcon icon="fa fa-globe" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
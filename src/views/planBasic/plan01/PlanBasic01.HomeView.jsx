import { useState } from "react";
import { PlanBasic01SidebarLeft } from "../../../components/planBasic/plan01/PlanBasic01.SidebarLeft";
import {PlanBasic01Modal} from '../../../components/planBasic/plan01/PlanBasic01.Modal'
    import { PlanBasic01Navbar } from '../../../components/planBasic/plan01/PlanBasic01.Navbar';
    import { PlanbBasic01SidebarRight } from "../../../components/planBasic/plan01/PlanBasic01.SidebarRight";
    import { PlanBasic01Header } from "../../../components/planBasic/plan01/PlanBasic01.Header";
    import { PlanBasic01Promos } from "../../../components/planBasic/plan01/PlanBasic01.Promos";
    import { PlanBasic01Products } from "../../../components/planBasic/plan01/PlanBasic01.Products";
    import { PlanBasic01Location } from '../../../components/planBasic/plan01/PlanBasic01.Location';
    import { PlanBasic01Footer } from '../../../components/planBasic/plan01/PlanBasic01.Footer';


export function PlanBasic01HomeView () {

    const [modalShow, setModalShow] = useState(false);
    const [sidebarLeftShow, setSidebarLeftShow] = useState(false);
    const [sidebarRightShow, setSidebarRightShow] = useState(false);

    return (
        <>
            <PlanBasic01Modal modalShow={modalShow} setModalShow={setModalShow} />
            <PlanBasic01SidebarLeft sidebarLeftShow={sidebarLeftShow} setSidebarLeftShow={setSidebarLeftShow} />
            <div>
                <PlanBasic01Navbar sidebarLeftShow={sidebarLeftShow} setSidebarLeftShow={setSidebarLeftShow} sidebarRightShow={sidebarRightShow} setSidebarRightShow={setSidebarRightShow} />
                <PlanbBasic01SidebarRight sidebarRightShow={sidebarRightShow} />
                <PlanBasic01Header />
                <PlanBasic01Promos />
                <PlanBasic01Products />
                <PlanBasic01Location />
                <PlanBasic01Footer />
            </div>
        </>
    )
}
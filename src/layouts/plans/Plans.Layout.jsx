import { Outlet } from "react-router-dom";
import { GeneralCompactNavbar } from '../../components/plans/General.CompactNavbar'

export function PlansLayout () {
    return (
        <>
            <div>
                <GeneralCompactNavbar />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}
import { Outlet } from "react-router-dom";
import { PlansCompactNavbar } from '../../components/plans/Plans.CompactNavbar'

export function PlansLayout () {
    return (
        <>
            <div>
                <PlansCompactNavbar />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}
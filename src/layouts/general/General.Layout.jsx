import { Outlet } from 'react-router-dom';
import { GeneralNavbar } from '../../components/general/General.Navbar';
import {GeneralFooter} from '../../components/general/General.Footer'


export function GeneralLayout () {
    return (
        <>
            <GeneralNavbar />
            <Outlet />
            <GeneralFooter />
        </>
    )
}
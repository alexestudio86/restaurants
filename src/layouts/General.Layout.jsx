import { GeneralNavbar } from '../components/General.Navbar';
import { Outlet } from 'react-router-dom';
import {GeneralFooter} from '../components/General.Footer'


export function GeneralLayout () {
    return (
        <>
            <GeneralNavbar />
            <Outlet />
            <GeneralFooter />
        </>
    )
}
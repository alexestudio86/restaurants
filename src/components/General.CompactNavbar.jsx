import { Outlet } from 'react-router-dom';


export function GeneralCompactNavbar () {
    return (
        <>
            Soy un compact navbar
            <Outlet />
            Soy un footer
        </>
    )
}
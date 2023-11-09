import { Outlet } from 'react-router-dom';


export function GeneralPagesLayout () {
    return (
        <>
            soy un compact navbar
            <Outlet />
            Soy un footer
        </>
    )
}
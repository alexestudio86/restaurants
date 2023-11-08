import { useRouteError } from "react-router-dom"

export function GeneralErrorPage () {

    const error = useRouteError();

    return (
        <>
            <h1>Error al cargar el sitio: {error.statusText || error.message}</h1>
        </>
    )
}
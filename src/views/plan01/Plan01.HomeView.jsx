import { Plan01Navbar } from "../../components/plan01/Plan01.Navbar";
import { Plan01Header } from "../../components/plan01/Plan01.Header";
import { Plan01Promos } from "../../components/plan01/Plan01.Promos";
import { Plan01Products } from "../../components/plan01/Plan01.Products";


export function Plan01HomeView () {
    return (
        <>
            <Plan01Navbar />
            <Plan01Header />
            <Plan01Promos />
            <Plan01Products />
        </>
    )
}
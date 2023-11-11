import { PlanPremium01Navbar } from "../../../components/planPremium/plan01/PlanPremium01.Navbar";
import { PlanPremium01Header } from "../../../components/planPremium/plan01/PlanPremium01.Header";
import { PlanPremium01Promos } from "../../../components/planPremium/plan01/PlanPremium01.Promos";
import { PlanPremium01Products } from "../../../components/planPremium/plan01/PlanPremium01.Products";


export function PlanPremium01HomeView () {
    return (
        <>
            <PlanPremium01Navbar />
            <PlanPremium01Header />
            <PlanPremium01Promos />
            <PlanPremium01Products />
        </>
    )
}
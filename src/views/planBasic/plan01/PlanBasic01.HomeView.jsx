import { PlanBasic01Navbar } from '../../../components/planBasic/plan01/PlanBasic01.Navbar'
import { PlanBasic01Header } from "../../../components/planBasic/plan01/PlanBasic01.Header";
import { PlanBasic01Promos } from "../../../components/planBasic/plan01/PlanBasic01.Promos";
import { PlanBasic01Products } from "../../../components/planBasic/plan01/PlanBasic01.Products";
import { PlanBasic01Location } from '../../../components/planBasic/plan01/PlanBasic01.Location';
import { PlanBasic01Footer } from '../../../components/planBasic/plan01/PlanBasic01.footer';


export function PlanBasic01HomeView () {
    return (
        <>
            <PlanBasic01Navbar />
            <PlanBasic01Header />
            <PlanBasic01Promos />
            <PlanBasic01Products />
            <PlanBasic01Location />
            <PlanBasic01Footer />
        </>
    )
}
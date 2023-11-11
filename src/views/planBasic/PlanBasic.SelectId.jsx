import { useParams } from "react-router-dom";
import { PlanBasic01HomeView } from './plan01/PlanBasic01.HomeView';


export function PlanBasicSelectId () {


    //const quack = [];
    const {id} = useParams();


    switch (id) {
        case 'plan-01':
            return (
                <>
                    <PlanBasic01HomeView />
                </>
            )
        case "plan-02":
            return (
                <>
                    Soy un plan premium
                </>
            )
        default:
            return (
                <>
                    plan no encontrado
                </>
            )
    }

}
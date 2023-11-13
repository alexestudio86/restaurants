import { useParams } from "react-router-dom";
import { PlanBasic01HomeView } from './plan01/PlanBasic01.HomeView';


export function PlanBasicSelectId () {


    //const quack = [];
    const {id} = useParams();


    switch (id) {
        case 'option-01':
            return (
                <>
                    <PlanBasic01HomeView />
                </>
            )
        case "option-02":
            return (
                <>
                    Soy el plan02
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
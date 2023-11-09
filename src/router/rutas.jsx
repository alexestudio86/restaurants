import { createBrowserRouter } from "react-router-dom";
import { GeneralLayout } from "../layouts/general/General.Layout";
import { GeneralNotFoundView } from "../views/general/General.NotFoundView";
import { getBasicData } from "../context/plans/jsonCalls";
import GeneralHomeView from "../views/general/General.HomeView";
    import { GeneralPagesLayout } from '../layouts/general/General.PagesLayout';
        import { GeneralPlansView } from '../views/general/General.PlansView';
    import { PlansLayout } from '../layouts/plans/Plans.Layout'
        import { Plan01HomeView } from "../views/plan01/Plan01.HomeView";


export const rutas = createBrowserRouter([
    {
        errorElement:   <GeneralNotFoundView />,
        children: [
            {
                element:        <GeneralLayout />,
                children:   [
                    {
                        index:      true,
                        path:       '/',
                        element:    <GeneralHomeView />
                    }
                ]
            },{
                path:           'basics',
                children:   [
                    {
                        element:    <GeneralPagesLayout />,
                        children:   [
                            {
                                path:       '',
                                element:    <GeneralPlansView />,
                            }
                        ]
                    },{
                        element:    <PlansLayout />,
                        children:   [
                            {
                                path:       ':id',
                                loader:     getBasicData,
                                element:    <Plan01HomeView />
                            }
                        ]
                    }
                ]
            }
        ]
    }
],{
    basename: '/restaurantes'
})
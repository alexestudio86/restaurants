import { createBrowserRouter } from "react-router-dom";
import { GeneralLayout } from "../layouts/General.Layout";
import { GeneralNotFoundView } from "../views/General.NotFoundView";
import { getHomeProducts } from "../context/jsonCalls";
import GeneralHomeView from "../views/General.HomeView";
    import { GeneralPagesLayout } from '../layouts/General.PagesLayout';
        import { GeneralPlansView } from '../views/General.PlansView';
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
                path:       'basics',
                loader:         getHomeProducts,
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
                        path:       ':id',
                        element:    <Plan01HomeView />
                    }
                ]
            }
        ]
    }
],{
    basename: '/restaurantes'
})
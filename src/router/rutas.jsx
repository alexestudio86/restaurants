import { createBrowserRouter } from "react-router-dom";
import { GeneralNotFoundView } from "../views/general/General.NotFoundView";
import { GeneralLayout } from "../layouts/general/General.Layout";
    import GeneralHomeView from "../views/general/General.HomeView";
        import { GeneralPagesView } from '../views/general/General.PagesView';
            import { PlanBasicHomeView } from "../views/planBasic/PlanBasic.HomeView";
            import {PlansLayout} from '../layouts/plans/Plans.Layout'
                import { PlanBasicSelectId } from "../views/planBasic/PlanBasic.SelectId";
            import {PlanPremiumHomeView} from '../views/planPremium/PlanPremium.HomeView';
                import { PlanPremiumSelectId } from "../views/planPremium/PlanPremium.SelectId";
        import { getBasicData, getPremiumData } from "../context/plans/jsonCalls";


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
                path:           'planes',
                children:   [
                    {
                        children:   [
                            {
                                path:       '',
                                element:    <GeneralPagesView />,
                            },{
                                path:       'basic',
                                children:   [
                                    {
                                        path:       '',
                                        element:    <PlanBasicHomeView />,
                                    },{
                                        path:       ':id',
                                        element:    <PlansLayout />,
                                        children:   [
                                            {
                                                path:       '',
                                                loader:     getBasicData,
                                                element:    <PlanBasicSelectId />
                                            }
                                        ]
                                    }
                                ]
                            },{
                                path:       'premium',
                                children:   [
                                    {
                                        path:       '',
                                        element:    <PlanPremiumHomeView />,
                                    },{
                                        path:       ':id',
                                        element:    <PlansLayout />,
                                        children:   [
                                            {
                                                path:       '',
                                                loader:     getPremiumData,
                                                element:    <PlanPremiumSelectId />
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
],{
    basename: '/restaurants'
})
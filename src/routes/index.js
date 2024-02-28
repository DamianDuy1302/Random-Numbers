import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";

const Routes = [
    {
        path: "/",
        element: <DefaultLayout/>,
        children:[
            {
                path: "/",
                element: <HomePage/>
            }
            
        ]
    }
]
export default Routes
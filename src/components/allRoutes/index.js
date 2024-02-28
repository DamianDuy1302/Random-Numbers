import { useRoutes } from "react-router-dom"
import Routes from "../../routes"

const AllRoutes = () =>{
    const elements = useRoutes(Routes)
    return (
        <>
            {elements}
        </>
    )
}
export default AllRoutes
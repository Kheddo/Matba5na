import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const AppRoutes = () => {
return (
    <Routes>
        <Route index element={<Home/>} >
        </Route>
        
    </Routes>
)};
export default AppRoutes;
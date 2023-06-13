import MainNavigation from "../components/MainNavigation.js";
import {Outlet} from "react-router-dom";

export default () => {
    return(
        <>
        <MainNavigation />
        <Outlet />
        </>
    )
}
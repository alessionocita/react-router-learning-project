import {Outlet} from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default () => {
    return(
        <>
        <EventsNavigation />
        <Outlet />
        </>
    );
}
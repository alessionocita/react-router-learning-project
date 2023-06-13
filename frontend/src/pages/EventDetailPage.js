import {json, useRouteLoaderData, redirect} from "react-router-dom"
import EventItem from "../components/EventItem";

export default function EventDetailPage () {
    
    const {event} = useRouteLoaderData("single-event");
    
    return (
    <>
    <EventItem event = {event} />
    </>)

}

export async function loader ({request, params}) {
 
    const response = await fetch('http://localhost:8080/events/' + params.id);
  

    if (!response.ok) {
        throw json({message: "Error fetching event"}, {status: 500});
    } else return response;
}

export async function action ({request, params}){

    console.log(request);
    const response = await fetch('http://localhost:8080/events/' + params.id, {method: request.method});
  

    if (!response.ok) {
        throw json({message: "Error fetching event"}, {status: 500});
    } else return redirect("/events");
}
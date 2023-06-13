import EventForm from '../components/EventForm';
import {json, redirect} from "react-router-dom";


export default function NewEventPage() {
   
    const event = {method: null, event: null}
   return <EventForm event = {event} method = "post"/>

}


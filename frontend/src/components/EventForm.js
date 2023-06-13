import { useNavigate , useNavigation, Form, useActionData, json, redirect} from 'react-router-dom';

import classes from './EventForm.module.css';

export default function EventForm({ method, event }) {
  const navigate = useNavigate();
  const {state} = useNavigation();
  const data = useActionData();
  function cancelHandler() {
    navigate('..');
  }

  return (
    <>
    <Form method = {method} className={classes.form}>
      <p>
        {data && data.errors && Object.values(data.errors).map(error =><li>{error}</li>)}
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event.title ? event.title : ""}/>
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event.image ? event.image : ""} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue = {event.date ? event.date : ""} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event.description ? event.description: ""} />
      </p>
      <div className={classes.actions}>
        <button type="button" disabled = {state === "submitting" ? true : false} onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled = {state === "submitting" ? true : false}>{state === "submitting" ? "saving...": "OK"}</button>
      </div>
    </Form>
    </>
  );
}



export async function action ({request, params}) {


  const data = await request.formData();

 const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description')
};
  

let url = 'http://localhost:8080/events';

  if(request.method === "PATCH"){
    url = url + "/" + params.id;
    } else if (request.method !== "PATCH" && request.method !== "POST") {

    return;
  }


  const response = await fetch(url, {
    method: request.method,
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData),

    
});

   if (response.status === 422) return response;
  
  if (!response.ok) {
      throw json({message: 'This was a bad request'}, {status:500})
  } else return redirect('/events')


}

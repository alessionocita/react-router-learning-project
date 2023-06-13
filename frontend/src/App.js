// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage, {loader as singleEventLoader, action as singleEventDeleteAction} from "./pages/EventDetailPage";
import EventsPage, { loader as eventLoader } from "./pages/EventsPage";
import Homepage from "./pages/Homepage";
import NewEventPage from "./pages/NewEventPage";
import EventsNavigationBar from "./pages/EventsNavigationBar";
import Error from "./pages/Error";
import {action as manipulateEventsAction} from "./components/EventForm";


const router = createBrowserRouter([
  {path:"/",
  element: <Root />,
  errorElement: <Error />,
  children: [
    {
      index: true,
      element: <Homepage />
    },
    {path: "/events",
    element: <EventsPage />,
    loader: eventLoader,
    },
    {path:"/events",
    element: <EventsNavigationBar />,
    children: [{
      path: ":id",
      id: "single-event",
      loader: singleEventLoader,
      children: [
        {index:true,
     element: <EventDetailPage />,
     action: singleEventDeleteAction
     
    },
    {path: "edit",
      element: <EditEventPage />,
      action: manipulateEventsAction
      },
       ]
    },
    {path: "/events/new",
    element: <NewEventPage />,
    action: manipulateEventsAction},
    
    
    
    ]
  }
    
  ]}
]
);

function App() {

  return (
    <>
    <RouterProvider router = { router }/>
    </>
  );
}

export default App;

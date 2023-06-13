import PageContent from "../components/PageContent"
import {useRouteError} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Error () {

    let errorData = useRouteError();
    console.log(errorData);
    let message;
    
    let status = errorData.status;
    let title;
    


    if (status === 500) {
        title = "Server error";
        message = errorData.message;
    } else if (status === 404){
        title = "Not found";
        message = "The page you requested does not exist";
    } else {
       
        title ="Something went wrong";
       message = "An Error occurred";
    }

    return (
    <>
    <MainNavigation />
    <PageContent title ={title}>{message}</PageContent>
    </>)
}
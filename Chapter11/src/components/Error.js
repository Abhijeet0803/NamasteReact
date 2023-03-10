import { useRouteError } from "react-router-dom";

const Error = () =>{

    console.log(useRouteError());

    const {status, statusText} = useRouteError();
    return(<div>
        <h1>{status}</h1>
        <h2>{statusText}</h2>
    </div>);
}
export default Error;

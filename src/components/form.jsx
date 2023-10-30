import { useDispatch, useSelector } from "react-redux";
import { useToken } from "../hooks/token"
import { addPerson, getPeopleData } from "../features/people/peopleSlice";

export const FormComponent = (props) => {
    const dispatch = useDispatch();
    const token = useToken();
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(addPerson({firstname: event.target.name.value}))
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" name="name"/>
                <input type="submit"></input>    
            </form> 
        </>
    )  
}

import { FormComponent } from "../components/form"
import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userContext";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, getPeopleData, getPeopleError, getPeopleSatus } from "../features/people/peopleSlice";
import { getPeopleThunk } from "../features/people/peopleThunk";


export const IndexPage = () => {
    const [people,setPeople] = useState([]);
    const [spinner,setSpinner] = useState(false);
    const [error,setError] = useState(null);

    const user = useContext(userContext)
    const peopeData = useSelector(getPeopleData)
    const peopleStatus = useSelector(getPeopleSatus)
    const peopleError =useSelector(getPeopleError)
    const dispatch = useDispatch()
    let reload = false;
    console.log(import.meta.env.VITE_API_KEY)
    useEffect(() => {
       if (peopleStatus === "idle"){
            dispatch(getPeopleThunk())
       }
       else if (peopleStatus === "fulfilled"){
            setSpinner(false)
            let listCom = [];
            console.log(peopeData)
            peopeData.forEach((p) => {
            listCom.push(<p>{p.firstname}</p>)
            })
            setPeople(listCom)
       }
       else if(peopleStatus === "pending"){
        setSpinner(true)
       }
       else if (peopleStatus === "error"){
        setError(peopleError)
       }
    },[dispatch,peopleStatus,peopeData])   
 
    return (<>
        {spinner ? <p>Loading</p> : people.map((element,index) => {return element}) }
        {error}
        <FormComponent/>
    </>)
}
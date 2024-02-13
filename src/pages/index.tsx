import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { CustomerLogin } from "../components/Login/customerLogin"
import { useEffect, useState } from "react";
import { AdminForm } from "../components/Admin/Adminform/Adminform";
import { AdminViews } from "./AdminViews/AdminViews";
import { CustomerViews } from "./customerViews/customerViews";


const BaseUrl = `${import.meta.env.VITE_BASE_URL}/customer`;

export const Index = ({token, setToken}) => {
  // const navigate = useNavigate();
  const [events, setEvents] = useState([])

  useEffect(() => {
    const call = async() => {
      const response = await axios.get(`${BaseUrl}`);
      setEvents(response.data.customer[0].events);
    }
    call();
  },[])

  // console.log(setToken);

  return (
    <div>
      <CustomerViews events={events} setEvents={setEvents}/>
      {/* <AdminViews events={events} setEvents={setEvents}/> */}
    </div>
  )
}

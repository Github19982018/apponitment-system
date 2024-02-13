import { useEffect, useState, } from "react";
import axios from 'axios';
import { useStore } from '../../../Hooks/store/useStore'

export const CustomerForm = ({id}) => {
    const [data, setData] = useState({});
    const events = useStore((state) => state.events);
    const updateEvent = useStore((state) => state.updateEvent);
    const addEvent = useStore((state) => state.addEvent);

    const BaseUrl = `${import.meta.env.VITE_BASE_URL}/user/0/events`;
    let event = {};
    id?events.forEach( element => {
      if(element.id == id) return event = element;
       }):null;
     
    // useEffect(() => { const fetchData = async () => {
    //     return await API.get(`/${props.match.params.id}`);
    // }
    //     const {data} = fetchData();
    //     setData(data);
    // })
    // const authIntercerptor = (req) => {
    //     const token = JSON.parse(localStorage.getItem("token"))?.token;
    //     req.headers.Authorization = `Bearer ${token}`;
    // }
    // const API =  axios.create({baseURL:Base_URL});
    // API.interceptors.request.use(authIntercerptor);

    const submitHandler = async(e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        let response = null;
        const data = {
          name : formdata.get('name'),
          title : formdata.get("title"),
          date : formdata.get("date")
        }
        id?response = await axios.patch(`${BaseUrl}/${id}`,data):
        response = await axios.post(BaseUrl,data);
        id?updateEvent(id,response.data):addEvent(response.data);
        id=null;
  }
  return (
    <div>
        <form onSubmit={(e)=>submitHandler(e)}>
            <div>
                <h3>{event.title}</h3> <h3>{event.date}</h3>
                <p>{event.details}</p>
            </div>
            <select name="appointment" id="appointment">
                <option value="">Select Event </option>
                {events.map((item) => {
                    return <option key={item.id} value={item.title}>{item.title}</option>
                })}
            </select>
            <div>
                  <label htmlFor="firstName">Write you first Name:</label>
                  <input id='fIrstName' name='firstName'  type="text" required placeholder='First Name' />
                  <input id='lasttName' name='lastName'  type="text" placeholder='Last Name' />
            </div>
            
            <label htmlFor="email">Your Email:</label>
            <input id="email" type="email" required placeholder='email' />
            
            <label htmlFor="contact">Other Contacts </label>
            <input type="text" id='contact' name='contact' placeholder='Other Contacts' />
            
            <label htmlFor="comments">Want to say anything additional? write here:</label>
            <textarea name="comments" id="comments" cols="30" rows="10" placeholder='Comments...'></textarea>

            <button id="submitBtn" type='submit' >Submit</button>
        </form>

    </div>
  )
}

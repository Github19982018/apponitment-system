import { useId, useState } from "react";
import axios from "axios";


export const AdminForm = ({events, setEvents,id}) => {
  // const appointList = [{id:1, name:"jsadfklo",date:"gh"}, {id:2, name:"jahsdf;h", date:"outhoj"}];
  const BaseUrl = `${import.meta.env.VITE_BASE_URL}/admin/1/events`;
  let event = {};
  id?events.forEach( element => {
    if(element.id == id) return event = element;
   }):null;

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
          setEvents(id?events.map((item)=>{
            if(item.id==id) return response.data;
          return item}):[...events,response.data]);
          console.log(response.data); 
          id=null;
    }

  // const changeHandler = (e) => {
  //   e.target.value = e.target.value;
  // }

  return (
    <div>
        <form onSubmit={(e)=>submitHandler(e)}>
            <div>
                <input type="text" name="name" id="name" placeholder="name"  defaultValue={id?event.name:''} />
                <label htmlFor="title">Enter a name for the event</label> 
                <input defaultValue={id?event.title:''} type="text" name="title" id="title" />
                <label htmlFor="date">Enter date</label><input type="date" name="date" id="date" defaultValue={id?event.date:''}/>
                <textarea placeholder="Enter additional details here" name="details" id="details" cols="30" rows="10"></textarea>
            </div>
            
            <label htmlFor="contact">Other Contacts </label>
            <input type="text" id='contact' name='contact' placeholder='Other Contacts' />

            <button id="submitBtn" type='submit'>Submit</button>
        </form>

    </div>
  )
}

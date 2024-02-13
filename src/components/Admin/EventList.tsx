import React, { useState } from 'react'
import { FiDelete, FiEdit } from "react-icons/fi";
import { AdminForm } from './Adminform/Adminform';
import axios from 'axios';

import './EventList.css'


const BaseUrl = `${import.meta.env.VITE_BASE_URL}admin/1/events`;

export const EventList = ({ events, setEvents}) => {
  const [id, setId] = useState(null);

  const editHandler = (id) => {
      setId(id);
  }

  const deleteHandler = (id) => {
      axios.delete(`${BaseUrl}/${id}`);
      setEvents(events.filter((item)=>item.id!==id));
  }


  return (
    <div>
        {id&&<div className='form-wrapper' onSubmit={()=>setId(null)}>
           <button type='button' onClick={()=>setId(null)}>X</button>
           <AdminForm events={events} setEvents={setEvents} id={id}/>
        </div>}
        <div>
            <input title='select all' type="checkbox" name="all" id="all" />
            <h3>Your Events</h3>
            <h3>date</h3>
            <span hidden><FiDelete />delete</span>
        </div>
       {events.map((event:{id:string,name:string,date:string,title:string}) => {
        return (<div key={event.id}>
            <input title='select' type="checkbox" name="select" id='select' />
            <h5>{event.title}</h5>
            <h6>{event.date}</h6>
            <span title='edit' className='edit' onClick={()=>editHandler(event.id)}><FiEdit /></span>
            <span><FiDelete onClick={()=>deleteHandler(event.id)} title='delete'/></span>
        </div>)
       })}
    </div>
  )
}

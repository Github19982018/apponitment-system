import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { CustomerForm } from "../Customer/customerForm/customerForm";

export const OpenEventList = ({events}) => {
    const [id, setId] = useState(null)

  const addHandler = (id) => {
      setId(id);
  }
    return (
        <div>
            {id&&<div className='form-wrapper' onSubmit={()=>setId(null)}>
               <button type='button' onClick={()=>setId(null)}>X</button>
               <CustomerForm  id={id}/>
            </div>}
            <div>
                <h3>Events</h3>
            </div>
           {events.map((event:{id:string,name:string,date:string,title:string}) => {
            return (<div key={event.id}>
                <input title='select' type="checkbox" name="select" id='select' />
                <h5>{event.title}</h5>
                <h6>{event.date}</h6>
                <span title='edit' className='add' onClick={()=>addHandler(event.id)}><FiPlusCircle /> </span>
            </div>)
           })}
        </div>
      )
}

import React from 'react'

export const AdminReport = () => {
  return (
    <div>
        {events.map((event) => {
            return(<div>
                <div>
                    <h3>{event.name}</h3> <h3>{event.date}</h3>
                </div>
                <div>
                   <h3>Number of persons: {event.count}</h3> <button type='button'>+</button>
                   {event.clients.map((client) => {
                     return(
                        <div key={client.id}>{client.name}</div>
                     )
                   })} 
                </div>
            </div>)
        })}
    </div>
 )
}

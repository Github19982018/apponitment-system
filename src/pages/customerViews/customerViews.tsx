
import { Calender } from "../../components/Admin/Calender";
import { EventList } from "../../components/Admin/EventList";
import { CustomerForm } from "../../components/Customer/customerForm/customerForm";

export const CustomerViews = ({events, setEvents}) => {
  return (
    <div>
      <Calender events={events} />
      <EventList events={events} setEvents={setEvents}/>
      {/* <CustomerForm events={events} setEvents={setEvents}/> */}
    </div>
  )
}
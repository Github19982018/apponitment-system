import { AdminForm } from "../../components/Admin/Adminform/Adminform";
import { Calender } from "../../components/Admin/Calender";
import { EventList } from "../../components/Admin/EventList";

export const AdminViews = ({events, setEvents}) => {
  return (
    <div>
      <Calender events={events} />
      <EventList events={events} setEvents={setEvents}/>
      <AdminForm events={events} setEvents={setEvents}/>
    </div>
  )
}
                                                                                                                            
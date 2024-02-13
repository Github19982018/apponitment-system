import axios from "axios";
import { Calender } from "../../components/Admin/Calender";
import { useLoaderData } from "react-router-dom";
import { OpenEventList } from "../../components/Open/OpenEventList";

const BaseUrl = import.meta.env.VITE_BASE_URL+"/"+"admin";

export async function loader({ params }) {
  const response = await axios.get(BaseUrl);
  const events = response.data.admin[params.accountId].events;
  return { events };
}

export const OpenEvents = () => {
    const { events } = useLoaderData();
  return (
    <div>
      <Calender events={events} />
      <OpenEventList events={events} />
    </div>
  )
}
                      
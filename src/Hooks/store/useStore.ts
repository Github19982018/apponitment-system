import { create } from "zustand";
import axios from "axios";

const response = await axios.get(import.meta.env.VITE_BASE_URL + "/customer");

export const useStore = create((set) => ({
  events: response.data.customer[0].events,
  updateEvent: (id,data) =>
    set((state) => ({
      events: state.events.map((item) => {
        if (item.id == id) return data;
        return item;
      }),
    })),
  addEvent: (data) =>
    set((state) => ({ events: [...state.events, data] })),
}));

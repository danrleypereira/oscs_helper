import axios from 'axios';
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.withCredentials = true;

type EventModel = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}


const api = axios.create({
  baseURL: `http://localhost:8000/`, 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

class EventServer {
    static async getAllEvents(): Promise<EventModel[]> {
        let events: EventModel[] = [];
        await api.get(`events/events/`)
            .then(res => {
                events = res.data;
            });
        return events;
    }
}


export {EventServer, type EventModel, api};
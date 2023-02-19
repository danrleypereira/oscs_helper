import React, { useEffect, useState } from "react";
import "./index.css";

import { EventServer, EventModel } from "../../Services/event";

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<EventModel[]>([]);

  useEffect(() => {updateEvents()}, []);

  const updateEvents = async () => {
    let events = await EventServer.getAllEvents();
    setEvents(events);
  };
  return (
    <div className="Calendar">
      {events?.map((event) => (
        <div>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <h5>{event.endDate}</h5>
          <h5>{event.startDate}</h5>
        </div>
      ))}
    </div>
  );
};

export default Calendar;

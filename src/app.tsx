import { useEffect, useState } from 'preact/hooks'
import './app.css'
import data from "./data.json"; // Adjust path as needed

import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'

import '@schedule-x/theme-default/dist/index.css'

function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0]

  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: data,
    plugins: [eventsService]
  })

  useEffect(() => {
    // get all events
    eventsService.getAll()
  }, [])

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}

export function App() {
  return (
    <div className="app-container">
      <header className="mailgaze-header">
        <div className="eye-icon">
          <div className="eye-shape"></div>
          <div className="eye-pupil"></div>
          <div className="eye-top-triangle"></div>
        </div>
        <h1>Mailgaze</h1>
        <h2>расписание встреч</h2>
      </header>

      <div className="CalendarApp">
        <CalendarApp />
      </div>
    </div>
  );
};



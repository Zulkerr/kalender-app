import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar({ onChange, value }) {
  const [date, setDate] = useState(value);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onChange(newDate); // Kalenderänderung nach oben weitergeben
  };

  return (
    <section style={{ marginTop: '2rem' }}>
      <h2>📅 Kalender</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date, view }) => {
          // Wochenenden rot markieren
          if (view === 'month' && (date.getDay() === 0 || date.getDay() === 6)) {
            return 'weekend';
          }
        }}
        style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#f5f5f5' }} // Hintergrundfarbe ändern
      />
    </section>
  );
}

export default MyCalendar;




  
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const today = new Date();
  const year = today.getFullYear();
  const thanksgiving = new Date(year, 10, 23); // Thanksgiving is on November 23 this year
  const christmas = new Date(year, 11, 25); // Christmas is always on December 25

  const initialHoliday = today > thanksgiving && today < christmas ? 'Christmas' : 'Thanksgiving';
  const [selectedHoliday, setSelectedHoliday] = useState(initialHoliday);
  const [daysUntil, setDaysUntil] = useState(0);

  useEffect(() => {
    let targetDate;
    if (selectedHoliday === 'Thanksgiving') {
      targetDate = today > thanksgiving ? new Date(year + 1, 10, 23) : thanksgiving;
    } else {
      targetDate = today > christmas ? new Date(year + 1, 11, 25) : christmas;
    }

    setDaysUntil(Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24)));
  }, [selectedHoliday]);

  return (
    <div className={`app ${selectedHoliday.toLowerCase()}`}>
      <h1>{selectedHoliday} Countdown</h1>
      <p>There are {daysUntil} days until {selectedHoliday}</p>
      <label>
        <input type="radio" value="Thanksgiving" checked={selectedHoliday === 'Thanksgiving'} onChange={() => setSelectedHoliday('Thanksgiving')} /> 
        <span>Thanksgiving</span>
      </label>
      <label>
        <input type="radio" value="Christmas" checked={selectedHoliday === 'Christmas'} onChange={() => setSelectedHoliday('Christmas')} /> 
        <span>Christmas</span>
      </label>
      {selectedHoliday === 'Thanksgiving' ? (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/CORgL-Iejps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      ) : (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/riSPpUNWdTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
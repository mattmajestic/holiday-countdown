import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isChristmas, setIsChristmas] = useState(false);
  const [daysUntil, setDaysUntil] = useState(0);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const thanksgiving = new Date(year, 10, 23); // Thanksgiving is on November 23 this year
    const christmas = new Date(year, 11, 25); // Christmas is always on December 25

    if (today > thanksgiving && today < christmas) {
      setIsChristmas(false);
      setDaysUntil(Math.ceil((christmas - today) / (1000 * 60 * 60 * 24)));
    } else if (today > christmas || today < thanksgiving) {
      setIsChristmas(false);
      const nextThanksgiving = today > christmas ? new Date(year + 1, 10, 23) : thanksgiving;
      setDaysUntil(Math.ceil((nextThanksgiving - today) / (1000 * 60 * 60 * 24)));
    } else if (today > thanksgiving && today < christmas) {
      setIsChristmas(true);
      setDaysUntil(Math.ceil((christmas - today) / (1000 * 60 * 60 * 24)));
    }
  }, []);

  return (
    <div className={`app ${isChristmas ? "christmas" : "thanksgiving"}`}>
      <h1>{isChristmas ? "It's Christmas!" : "It's Thanksgiving!"}</h1>
      <p>There are {daysUntil} days until {isChristmas ? "Thanksgiving" : "Christmas"}</p>
      <label>
        <input type="radio" value="Thanksgiving" checked={!isChristmas} onChange={() => setIsChristmas(false)} /> 
        <span>Thanksgiving</span>
      </label>
      <label>
        <input type="radio" value="Christmas" checked={isChristmas} onChange={() => setIsChristmas(true)} /> 
        <span>Christmas</span>
      </label>
      {!isChristmas ? (
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
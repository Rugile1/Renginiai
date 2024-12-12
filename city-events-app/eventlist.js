// eventlist.js

// Funkcija, kuri užkrauna įvykius iš API
async function fetchEvents() {
  try {
      // Siunčiame GET užklausą į serverį (pavyzdžiui, /events)
      const response = await fetch('http://localhost:5000/events');  // Priklauso nuo tavo serverio maršruto
      
      // Patikrink, ar serveris grąžina tinkamą atsakymą
      if (!response.ok) {
          throw new Error('Server returned an error');
      }

      const events = await response.json();  // Konvertuojame atsakymą į JSON

      // Tikriname, ar atsakymas yra teisingas
      if (Array.isArray(events) && events.length > 0) {
          const eventsList = document.getElementById('eventsList');
          eventsList.innerHTML = '';  // Išvalome sąrašą prieš įdėdami naujus įvykius

          // Iteruojame per įvykius ir juos rodykime
          events.forEach(event => {
              const li = document.createElement('li');
              li.className = 'event-item';

              li.innerHTML = `
                  <h3>${event.title}</h3>
                  <p><span>Date:</span> ${event.date}</p>
                  <p><span>Description:</span> ${event.description}</p>
              `;

              eventsList.appendChild(li);  // Įdedame įvykius į sąrašą
          });
      } else {
          alert('No events found!');
      }
  } catch (error) {
      console.error('Error fetching events:', error);
      alert('Failed to load events');
  }
}

// Užkrauname įvykius, kai puslapis įkeltas
window.onload = fetchEvents;

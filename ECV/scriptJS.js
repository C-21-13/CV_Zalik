function updateLocalTime() {
      const localTimeElement = document.getElementById('localTime');
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      const localTimeString = new Date().toLocaleString('uk-UA', options);
      localTimeElement.textContent = 'Місцевий час: ' + localTimeString;
    }

    setInterval(updateLocalTime, 1000);
    document.addEventListener('DOMContentLoaded', updateLocalTime);
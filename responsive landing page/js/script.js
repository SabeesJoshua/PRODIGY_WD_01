function recordLap() {
    if (startTime) {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
  
      const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
      const seconds = Math.floor((elapsedTime / 1000) % 60);
      const milliseconds = Math.floor(elapsedTime % 1000);
  
      const formattedLapTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  
      lapTimes.push(formattedLapTime);
  
      const lapListItem = document.createElement('li');
      lapListItem.textContent = `Lap ${lapTimes.length}: ${formattedLapTime}`;
      lapList.appendChild(lapListItem);
    }
  }
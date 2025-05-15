function updateClock() {
    const now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Convert to 12-hour format with AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  
    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  
    document.getElementById("clock").textContent = currentTime;
  }
  
  // Update clock every second
  setInterval(updateClock, 1000);
  
  // Run once on page load
  updateClock();
  
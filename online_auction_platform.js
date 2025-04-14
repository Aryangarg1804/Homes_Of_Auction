
const targetDates = {
    "timer-1": new Date("2025-04-06T23:06:08").getTime(),
    "timer-2": new Date("2025-04-01T01:19:55").getTime(),
    "timer-3": new Date("2025-04-02T04:24:06").getTime(),
    "timer-4": new Date("2025-03-30T08:49:43").getTime(),
    "timer-5": new Date("2025-03-31T05:34:54").getTime(),
    "timer-6": new Date("2025-03-31T03:43:23").getTime(),
    "timer-7": new Date("2025-04-02T11:23:12").getTime(),
    "timer-8": new Date("2025-04-04T03:23:54").getTime(),
    "timer-9": new Date("2025-04-02T10:32:31").getTime(),
    "timer-10": new Date("2025-03-31T03:28:52").getTime(),
    "timer-11": new Date("2025-04-05T02:23:45").getTime(),
    "timer-12": new Date("2025-04-09T08:35:12").getTime(),
    "timer-13": new Date("2025-04-09T02:50:12").getTime(),
    "timer-14": new Date("2025-04-15T03:32:12").getTime(),
    "timer-15": new Date("2025-03-30T10:34:32").getTime(),
    "timer-16": new Date("2025-04-05T00:09:28").getTime(),
  };
  
   
  setInterval(() => {
    const now = new Date().getTime();
  
    for (let timerId in targetDates) {
      const targetTime = targetDates[timerId];
      const distance = targetTime - now;
  
      if (distance < 0) {
        return
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById(timerId).innerHTML = `
        <div class="timer-days">${days}</div>
        <div class="column">:</div>
        <div class="timer-hour">${hours}</div>
        <div class="column">:</div>
        <div class="timer-minute">${minutes}</div>
        <div class="column">:</div>
        <div class="timer-sec">${seconds}</div>`;
    }
  }, 1000);
  

  function ValidationForm() {
    var name = document.forms["myForm"]["fname"].value;
    var email = document.forms["myForm"]["femail"].value;
    var textarea = document.forms["myForm"]["tArea"].value;

    if (name.length === 0 || email.length === 0 || textarea.length === 0) {
        alert("Please fill in all the fields.");
        return false;
    }
    else{
      return true;
    }
}

let sub = document.querySelector("#submitTheForm");
sub.addEventListener("click", (event) => {
  event.preventDefault();
  
    if (ValidationForm() !== true) {
        return;
    }
    else{
      alert("Feedback Form has been submitted successfully");
    }
   
    document.forms["myForm"].reset();
});


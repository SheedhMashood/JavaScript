let num001 = 1;
document.getElementById("minus1").onclick = function() {
    num001-=1;
    document.getElementById("no1").innerHTML = num001;
    if (num001 < 1){
        num001 = 1;
    }
}
document.getElementById("plus1").onclick = function () {
    num001+=1;
    document.getElementById("no1").innerHTML = num001;
}

let num002 = 1;
document.getElementById("minus2").onclick = function() {
    num002-=1;
    document.getElementById("no2").innerHTML = num002;
    if (num002 < 1){
        num002 = 1;
    }
}
document.getElementById("plus2").onclick = function () {
    num002+=1;
    document.getElementById("no2").innerHTML = num002;
}

let num003 = 1;
document.getElementById("minus3").onclick = function() {
    num003-=1;
    document.getElementById("no3").innerHTML = num003;
    if (num003 < 1){
        num003 = 1;
    }
}
document.getElementById("plus3").onclick = function () {
    num003+=1;
    document.getElementById("no3").innerHTML = num003;
}

let num004 = 1;
document.getElementById("minus4").onclick = function() {
    num004-=1;
    document.getElementById("no4").innerHTML = num004;
    if (num004 < 1){
        num004 = 1;
    }
}
document.getElementById("plus4").onclick = function () {
    num004+=1;
    document.getElementById("no4").innerHTML = num004;
}

let num005 = 1;
document.getElementById("minus5").onclick = function() {
    num005-=1;
    document.getElementById("no5").innerHTML = num005;
    if (num005 < 1){
        num005 = 1;
    }
}
document.getElementById("plus5").onclick = function () {
    num005+=1;
    document.getElementById("no5").innerHTML = num005;
}

/*END*/

/*CALENDER*/

const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const selectedDateDisplay = document.getElementById('selectedDateDisplay');

let currentDate = new Date();

function updateCalendar() {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startOffset = firstDay.getDay();

    monthYearElement.innerText = currentDate.toLocaleString('default', { month: 'long' }) + ' ' + currentDate.getFullYear();

    datesElement.innerHTML = '';

    for (let i = 0; i < startOffset; i++) {
        const emptyDateCell = document.createElement('div');
        emptyDateCell.classList.add('date');
        datesElement.appendChild(emptyDateCell);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dateCell = document.createElement('div');
        dateCell.classList.add('date');
        dateCell.textContent = i;
        dateCell.addEventListener('click', () => {
            const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            localStorage.setItem('selectedDate', selectedDate.toISOString());
            displaySelectedDate(selectedDate); // Call the function to display the selected date
        });
        datesElement.appendChild(dateCell);
    }
}

function displaySelectedDate(date) {
    selectedDateDisplay.textContent = `${date.toDateString()}`;
}

updateCalendar();

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

// Load the selected date from local storage when the page loads
window.addEventListener('load', () => {
    const storedDate = localStorage.getItem('selectedDate');
    if (storedDate) {
        const selectedDate = new Date(storedDate);
        displaySelectedDate(selectedDate); // Call the function to display the selected date
    }
});
/*END*/

/*TICKET*/


const timeSlotSelect = document.getElementById('time-slot');
const saveButton = document.getElementById('save-button');
const savedSlots = document.getElementById('saved-slots');

saveButton.addEventListener('click', function() {
  const selectedTimeSlots = Array.from(timeSlotSelect.selectedOptions).map(option => option.value);
  localStorage.setItem('selectedTimeSlots', JSON.stringify(selectedTimeSlots));
  displayTotalHours(selectedTimeSlots);
});

function displayTotalHours(timeSlots) {
  const totalHours = calculateTotalHours(timeSlots);
  savedSlots.innerHTML = `<p>Total Hours: ${totalHours.toFixed(2)}</p>`;
}

function calculateTotalHours(timeSlots) {
  let totalMinutes = 0;
  for (const timeSlot of timeSlots) {
    const times = timeSlot.split('-').map(time => time.trim());
    const startTime = parseTime(times[0]);
    const endTime = parseTime(times[1]);
    totalMinutes += (endTime - startTime);
  }
  return totalMinutes / 60;
}

function parseTime(timeStr) {
  const [hour, minute] = timeStr.split(':').map(part => parseInt(part));
  return (hour % 12 + (timeStr.toLowerCase().includes('pm') ? 12 : 0)) * 60 + minute;
}

// Display the previously saved time slots on page load
const previouslySelectedSlots = JSON.parse(localStorage.getItem('selectedTimeSlots'));
if (previouslySelectedSlots) {
  displayTotalHours(previouslySelectedSlots);
}

/*END*/





/*DETAILS PAGE*/

document.getElementById("submitButton").onclick = function () {
    document.getElementById("cnName").textContent = localStorage.getItem("Fn");
    document.getElementById("cnEmail").textContent = localStorage.getItem("Email");
    document.getElementById("cnMobile").textContent = localStorage.getItem("Mob");
    document.getElementById("dt").textContent = localStorage.getItem("Dob");
}


/*END*/


/*PAYMENT PAGE*/



/*END*/

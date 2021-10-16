// Initial display of date
const dateToday = new Date();
const date = dateToday.toLocaleTimeString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
document.getElementById("date").innerHTML = date;

// Auto reload date
setInterval(() => {
    const dateToday = new Date();
    const date = dateToday.toLocaleTimeString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("date").innerHTML = date;
}, 1000);
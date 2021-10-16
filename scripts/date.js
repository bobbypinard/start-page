// Initial display of date
const atoday = new Date();
const date = atoday.toLocaleTimeString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
document.getElementById("date").innerHTML = date;

// Auto reload date
setInterval(() => {
    const atoday = new Date();
    const date = atoday.toLocaleTimeString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("date").innerHTML = date;
}, 1000);
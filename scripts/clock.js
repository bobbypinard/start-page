// Initial display of time
const today = new Date();
const time = today.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
const date = today.toLocaleTimeString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = date;

// Auto reload time
setInterval(() => {
    const today = new Date();
    const time = today.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
    const date = today.toLocaleTimeString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}, 1000);
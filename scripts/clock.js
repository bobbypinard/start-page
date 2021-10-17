// Initial display of time
const today = new Date();
const time = today.toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'});
const date = today.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = date;

// Auto reload time
setInterval(() => {
    const today = new Date();
    const time = today.toLocaleTimeString('en-GB', { hour: 'false', minute:'false' });
    const date = today.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}, 1000);
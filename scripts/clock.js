// Initial display of time
const today = new Date();
const time = today.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
document.getElementById("clock").innerHTML = time;

// Auto reload time
setInterval(() => {
    const today = new Date();
    const time = today.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
    document.getElementById("clock").innerHTML = time;
}, 1000);
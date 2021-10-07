const date = () => {
    const time = new Date();
    const date = time.toDateString();
    
    document.getElementById("date").innerHTML = date;
}

setInterval(date, 1000);
// Listen if logo has been clicked
let se = 2;
document.getElementById("se-logo").addEventListener("click", function() {
    se++;
    cycleSearchEngines(se);
  });

// Array for all search engines
const searchEngines = [{
    src: "ecosia.png",
    placeholder: "Ecosia",
    action: "https://ecosia.org/search"
}, {
    src: "maps.png",
    placeholder: "Google Maps",
    action: "https://www.google.com/maps?q="
}, {
    src: "youtube.png",
    placeholder: "YouTube",
    action: "https://www.youtube.com/results?q="
}]

// Replace search fields with desired engine
const cycleSearchEngines = se => {
    const curData = searchEngines[(se+1) % searchEngines.length];
  
    document.getElementById("se-logo").src = "img/" + curData.src;
    document.getElementById("se-input").placeholder = "Searching with " + curData.placeholder;
    document.getElementById("se").action = curData.action;
  };
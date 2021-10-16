let se = 2;

// Listen if logo has been clicked
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

// Replace search field with desired engine
const cycleSearchEngines = se => {
    const curData = searchEngines[(se+1) % searchEngines.length];
  
    document.getElementById("se-logo").src = "img/" + curData.src;
    document.getElementById("search-input").placeholder = "Searching with " + curData.placeholder;
    document.getElementById("search").action = curData.action;
  };
const url = "https://raw.githubusercontent.com/mhollingshead/billboard-hot-100/main/all.json";
const imgDisc = document.createElement("img");
imgDisc.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/CD_autolev_crop_new.jpg/220px-CD_autolev_crop_new.jpg";
imgDisc.style.height = "100px";
imgDisc.style.width = "100px";

let songDetails = document.getElementById("songDetails");

let song = document.getElementById("song");
let artist = document.getElementById("artist");
let thisWeek = document.getElementById("thisWeek");
let lastWeek = document.getElementById("lastWeek");
let peakPosition = document.getElementById("peakPosition");
function fetchMusic(){
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw "We weren't able to obtain JSON";
            }
        })
        .then(data => {
            const top5songs = data.find(obj => obj.date === "2024-07-06").data.slice(0, 5);
            top5songs.forEach(song => {
                renderMusicDetail(song);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

fetchMusic();

function top5songsOfJuly() {
    return obj.date === "2024-07-06";
    data.find(top5songsOfJuly).data.slice(0,5)
};

function renderMusicDetail(song){
    let newSongDetails = songDetails.cloneNode(true);
    newSongDetails.style.display = "block";

    let songElem = newSongDetails.querySelector("#song");
    let artistElem = newSongDetails.querySelector("#artist");
    let thisWeekElem = newSongDetails.querySelector("#thisWeek");
    let lastWeekElem = newSongDetails.querySelector("#lastWeek");
    let peakPositionElem = newSongDetails.querySelector("#peakPosition");

    songElem.textContent = `Song Title: ${song.song}`;
    artistElem.textContent = `Artist: ${song.artist}`;
    thisWeekElem.textContent = `Ranking This Week: ${song.this_week}`;
    lastWeekElem.textContent = `Ranking Last Week: ${song.last_week}`;
    peakPositionElem.textContent = "Click me- Find out the Peak Position";

    
    songElem.addEventListener("mouseout", event => {
        event.target.textContent = "Checkout the hit song"
        })    

    songElem.addEventListener("mouseover", event => {
        event.target.textContent = `Song Title: ${song.song}`
        })

    peakPositionElem.addEventListener("click", event => {
        if (event.target.textContent === "Click me- Find out the Peak Position") {
            event.target.textContent = `Peak Position: ${song.peak_position}`;
        } else {
            event.target.textContent = "Click me- Find out the Peak Position";
        }

   
});

   

songDetails.parentNode.insertBefore(newSongDetails, songDetails.nextSibling);
}
const url = "https://raw.githubusercontent.com/mhollingshead/billboard-hot-100/main/all.json";

const imgDisc = document.createElement("img");
imgDisc.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/CD_autolev_crop_new.jpg/220px-CD_autolev_crop_new.jpg";
imgDisc.style.height = "100px";
imgDisc.style.width = "100px";

let songDetails = document.querySelector("body");


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
            console.log(top5songs)
            top5songs.forEach(song => {
                renderMusicDetail(song);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

fetchMusic();


function renderMusicDetail(song){
   
    let newSongDetails = document.createElement("div")
    newSongDetails.id = "songDetails"

    const imgDisc = document.createElement("img");
    imgDisc.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/CD_autolev_crop_new.jpg/220px-CD_autolev_crop_new.jpg";
    imgDisc.style.height = "100px";
    imgDisc.style.width = "100px";

    let songElem = document.createElement("h3");
    songElem.id = "song";

    let artistElem = document.createElement("h3");
    artistElem.id = "artist";

    let thisWeekElem = document.createElement("h4");
    thisWeekElem.id = "thisWeek";
        
    let lastWeekElem = document.createElement("h4");
    lastWeekElem.id ="lastWeek";
    
    let peakPositionElem = document.createElement("h4");
    peakPositionElem.id = "peakPosition"

    songElem.textContent = `Checkout the hit song`;
    artistElem.textContent = `Artist: ${song.artist}`;
    thisWeekElem.textContent = `Ranking This Week: ${song.this_week}`;
    lastWeekElem.textContent = `Ranking Last Week: ${song.last_week}`;
    peakPositionElem.textContent = "Click me- Find out the Peak Position";

    
    songElem.addEventListener("mouseover", event => {
        event.target.textContent = `Song Title: ${song.song}`
        })    

    songElem.addEventListener("mouseout", event => {
        event.target.textContent = "Checkout the hit song"
        })

    peakPositionElem.addEventListener("click", event => {
        if (event.target.textContent === "Click me- Find out the Peak Position") {
            event.target.textContent = `Peak Position: ${song.peak_position}`;
        } else {
            event.target.textContent = "Click me- Find out the Peak Position";
        }
   
});
  
    newSongDetails.append(imgDisc, songElem, artistElem, thisWeekElem, lastWeekElem, peakPositionElem);

    songDetails.append(newSongDetails);
}
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
         if (response.ok){
            return response.json()
        }else {
            throw "We weren't able to obtain JSON"
        };
        })
        .then((array) => {console.log(array)
            function top5songsOfJuly(obj) {
                return obj.date === "2024-07-06";
           }

            array.find(top5songsOfJuly).data.slice(0,5)
          
            array.find(top5songsOfJuly).data.slice(0,5).forEach((top5songsOfJuly) => {console.log(top5songsOfJuly)
            renderMusicDetail(top5songsOfJuly)
             });
        });
};

fetchMusic();


function top5songsOfJuly(obj) {
    return obj.date === "2024-07-06";
   
 array.find(top5songsOfJuly).data.slice(0,5)
};



function renderMusicImg (music) {
    let songDetails = document.getElementById("songDetails");
    songDetails.append(imgDisc);
}

function renderMusicDetail(top5songsOfJuly){
    let song = document.getElementById("song");
    let artist = document.getElementById("artist");
    let thisWeek = document.getElementById("thisWeek");
    let lastWeek = document.getElementById("lastWeek");
    let peakPosition = document.getElementById("peakPosition");
    // console.log(music.data[0].song)

    song.textContent = `Song Title: ${top5songsOfJuly.song}`;
    // console.log(song);
    artist.textContent = `Artist: ${top5songsOfJuly.artist}`;
    thisWeek.textContent = `Ranking This Week: ${top5songsOfJuly.this_week}`;
    lastWeek.textContent = `Ranking Last Week: ${top5songsOfJuly.last_week}`;
    peakPosition.textContent = "Click me- Find out the Peak Position"

    songDetails.append(song, artist, thisWeek, lastWeek);

    peakPosition.addEventListener("click", event => {
       if (event.target.textContent === "Click me- Find out the Peak Position"){ 
         event.target.textContent = `Peak Position: ${top5songsOfJuly.peak_position}`
       } else {
        event.target.textContent = "Click me- Find out the Peak Position"
       }
    });
};

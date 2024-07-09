const imgDisc = document.createElement("img");
imgDisc.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/CD_autolev_crop_new.jpg/220px-CD_autolev_crop_new.jpg";
imgDisc.style.height = "100px";
imgDisc.style.width = "100px";


// const songDiv = document.getElementbyID("songBar");



function fetchMusic(){
    fetch("https://raw.githubusercontent.com/mhollingshead/billboard-hot-100/main/all.json")
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

// function top5songsOfJuly(obj) {
//     return obj.date === "2024-07-06";
//   }
//   array.find(top5songsOfJuly).data.slice(0,5)

//We are going to need to creat an img, p, div, header 

function renderMusicImg (music) {
    let songDiv = document.getElementById("songBar");
    songDiv.append(imgDisc);
}



function renderMusicDetail(top5songsOfJuly){
    let songDetail = document.getElementById("songDetails");
    let artist = document.getElementById("artists");
    let thisWeek = document.getElementById("thisWeek");
    let lastWeek = document.getElementById("lastWeek");
    let peakPosition = document.getElementById("peakPosition");
    // console.log(music.data[0].song)

    songDetail.textContent = top5songsOfJuly.song;
    // console.log(songDetail);
    thisWeek.textContent = top5songsOfJuly.this_week;
    lastWeek.textContent = top5songsOfJuly.last_week;
    artist.textContent = top5songsOfJuly.artist;
    peakPosition.textContent = top5songsOfJuly.peak_position;


    songDetail.append(artist,thisWeek,lastWeek,peakPosition)
};

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
     .then((data) => {
        data.forEach((music) => {
        renderMusicDetail(music)
        renderMusicImg(music);
     });
});
};

fetchMusic();

//We are going to need to creat an img, p, div, header 

function renderMusicImg (music) {
    let songDiv = document.getElementByID("songBar");
    songDiv.append(imgDisc);
}


function renderMusicDetail(music){
    let songDetail = document.getElementById("songDetails");
    let disc = document.getElementById("discs");
    let artist = document.getElementById("artists");
    let thisWeek = document.getElementById("thisWeek");
    let lastWeek = document.getElementById("lastWeek");
    let peakPosition = document.getElementById("peakPosition");
   
    songDetail.textContent = music.song;
    thisWeek.textContent = music["this_week"];
    lastWeek.textContent = music["last_week"];
    artist.textContent = music.artist;
    peakPosition.textContent = music["peak_position"];
    disc.src = imgDisc;
};

function fetchMusic(){
    return fetch("https://raw.githubusercontent.com/mhollingshead/billboard-hot-100/main/all.json")
    .then(response => response.json())
    .then(data => console.log(data));
}
fetchMusic();
function fetchMusic(){
    return fetch("https://raw.githubusercontent.com/mhollingshead/billboard-hot-100/main/all.json")
    .then(response => response.json())
    .then(data => console.log(data));
}
fetchMusic();


const h2 = document.createElement("h2");
h2.textContent = "Billboard";
document.querySelector("body").appendChild(h2);
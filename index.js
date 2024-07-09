const showFavoriteButton = document.getElementById("favoritemusic");
const sideBar = document.getElementById("sidebar");
const imgDisc = document.createElement("img");
const h3 = document.getElementById("image"); //delete this later it was mostly to see what the image was going to render in the website 
imgDisc.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/CD_autolev_crop_new.jpg/220px-CD_autolev_crop_new.jpg";
imgDisc.style.height = "100px";
imgDisc.style.width = "100px";

h3.appendChild(imgDisc); //delete this later it was mostly to see what the image was going to render in the website 

function fetchMusic(){
    fetch("https://raw.githubusercontent.com/mhollingshead/billboard-hot-100/main/all.json")
        .then(response => {
         if (response.ok){
            return response.json()
        }else {
            throw "We weren't able to obtain JSON"
        };
        })
     .then(data => console.log(data));
    //we need to probably do .forEach() to iterate the data 
};

fetchMusic();

//We are going to need to creat an img, p, div, header 


//inside the search bar(the week ending put a h5 tag and give the user an example as to how to use the serach bar): If...else if or do an forEach()

//




//Get the element that we need to attach it to "webpage"



//event listener
// showFavoriteButton.addEventListener('click', () => {
//     sideBar.style.width = 20%
//     ReportBody.style.marginRight = 20%
// })


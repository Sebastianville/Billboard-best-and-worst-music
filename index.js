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


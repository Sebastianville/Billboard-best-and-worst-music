# View Billboard’s Top 100 songs of 2024
Discover and learn how your music performed week to week

# User Stories
As a user, I will be able to search songs that are becoming top 100 for the year 2024. I can directly search for the week or I can filter by month. I can obtain more information about the music by clicking on the disc and getting the information that is displayed when the disc flips over. I can also click on the music and add it to my favorite tab. This will allow me to quickly find the music I like.

An example of your db.json or what API you are going to use
db.json fromGithub/billboard charts 

What 3 unique event listeners you will use
a. Submit - form for user it search for dates
addEventListener("submit", (event) => {});


b. Toggle – user can toggle on “CD” have description of song displayed (artist name, date song appeared on BB, peak position)

addEventListener("toggle", (event) => {});
The toggle event fires when the open/closed state of a <details> element is toggled.

c. Click – user can click on button to add or delete songs to the “Favorite” panel
addEventListener("click", (event) => {});

How you will be using array iteration
We will use forEach to display song info to the user. 

Three stretch goals
a. Add more years to database
b. Add songs to Spotify playlist
c. Link YouTube videos 
d. Add image of Artist or/Album to each “CD” 
e. Maybe a Karaoke app? User can select songs and add to a Karaoke playlist? 

A Kanban board
Excel spreadsheet
maybe Rachel can help guide us too
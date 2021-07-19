const inputField = document.getElementById("song");

const btn1 = document.getElementById("btn1");

const Display = document.getElementById("Display")





btn1.addEventListener("click", makeRequest);

const BaseUrl = "http://api.musixmatch.com/ws/1.1"
const API_KEY = "bf6d392134c538ae614d97356ace8283";
const CORS = "https://cors.bridged.cc";


// track.search?q_artist=justin&apikey=f6d392134c538ae614d97356ace8283

async function makeRequest() {
    let value = inputField.value; 
    
    if (!value) {
        alert("Yo, write something!!!")

        return;
    }

    //Api calling

    const url = `${CORS}/${BaseUrl}/track.search?q_track=${value}&apikey=${API_KEY}`;
    
    try{
        const Data = await fetch(url);
        const mainData = await Data.json();
        const res = mainData;

        console.log(res);
        
       
       if (result.length === 0) {
           Display.innerHTML = "Can't Find Song"
           
       } else {
           res.forEach((single) =>{
               console.log(single);
           })
           
       }

    }catch(err) {
        console.log(err);
    }
    

  
   


}
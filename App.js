const inputField = document.getElementById("song");

const btn1 = document.getElementById("btn1");

const Display = document.getElementById("Display")





btn1.addEventListener("click", makeRequest);

const BaseUrl = "http://api.musixmatch.com/ws/1.1"
const API_KEY = "bf6d392134c538ae614d97356ace8283";
const CORS = "https://cors.bridged.cc";

// if () {
//    const fixx = document.getElementsByClassName("fixx")
//     fixx.style.display = "none"
// } 

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
        const res = mainData.message.body.track_list;

        console.log(res);
        
       
       if (res.length === 0) {
           Display.innerHTML = "Can't Find Song";
           const fixxer = document.getElementById("fixxer");
           const fixxer2 = document.getElementById("fixxer2");
           fixxer.style.display = "none";
           fixxer2.style.display = "none";
           
       } else {
          const new1 = document.getElementById("Display1");
          const new2 = document.getElementById("Display2");
          const new3 = document.getElementById("Display3");
          new1.innerHTML = res[0].track.track_name;
          new2.innerHTML = res[0].track.artist_name;
          new3.innerHTML = res[0].track.track_rating;

          const new11 = document.getElementById("Display11");
          const new21 = document.getElementById("Display21");
          const new31 = document.getElementById("Display31");
          new11.innerHTML = res[1].track.track_name;
          new21.innerHTML = res[1].track.artist_name;
          new31.innerHTML = res[1].track.track_rating;

          const new12 = document.getElementById("Display12");
          const new22 = document.getElementById("Display22");
          const new32 = document.getElementById("Display32");
          new12.innerHTML = res[2].track.track_name;
          new22.innerHTML = res[2].track.artist_name;
          new32.innerHTML = res[2].track.track_rating;

          const new13 = document.getElementById("Display13");
          const new23 = document.getElementById("Display23");
          const new33 = document.getElementById("Display33");
          new13.innerHTML = res[3].track.track_name;
          new23.innerHTML = res[3].track.artist_name;
          new33.innerHTML = res[3].track.track_rating;

          const new14 = document.getElementById("Display14");
          const new24 = document.getElementById("Display24");
          const new34 = document.getElementById("Display34");
          new14.innerHTML = res[4].track.track_name;
          new24.innerHTML = res[4].track.artist_name;
          new34.innerHTML = res[4].track.track_rating;

          const new15 = document.getElementById("Display15");
          const new25 = document.getElementById("Display25");
          const new35 = document.getElementById("Display35");
          new15.innerHTML = res[5].track.track_name;
          new25.innerHTML = res[5].track.artist_name;
          new35.innerHTML = res[5].track.track_rating;
           
       }

    }catch(err) {
        console.log(err);
    }
    

  
   


}
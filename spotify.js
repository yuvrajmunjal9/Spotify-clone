console.log("welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('song/1.mp3'); // changed filepath to 'ong/1.mp3'
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"0 to 100", filepath : "song/1.mp3", coverpath : "cover1.jpg"},
    {songName:"East side flow", filepath : "song/2.mp3", coverpath : "cover1.jpg"},
    {songName:"Jatt Da Muqabla", filepath : "song/3.mp3", coverpath : "cover1.jpg"},
    {songName:"Just Listen", filepath : "song/1.mp3", coverpath : "cover1.jpg"},
    {songName:"Everybody Hurts", filepath : "song/1.mp3", coverpath : "cover1.jpg"},
    {songName:"Bloodlust", filepath : "song/1.mp3", coverpath : "cover1.jpg"},
    {songName:"0 to 100", filepath : "song/1.mp3", coverpath : "cover1.jpg"},
    {songName:"0 to 100", filepath : "song/1.mp3", coverpath : "cover1.jpg"},
    {songName:"0 to 100", filepath : "song/1.mp3", coverpath : "cover1.jpg"},
    {songName:"0 to 100", filepath : "song/1.mp3", coverpath : "cover1.jpg"},
]

songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    console.log('playing');
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=> {
    let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songpItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songpItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filepath; // added this line to update the audio source
        audioElement.play(); // added this line to play the new song
    })
})







//   masterPlay.addEventListener('click', () => {
//     if(audioElement.paused || audioElement.currentTime<=0){
//        audioElement.play();
//        masterPlay.classList.remove('fa-play-circle');
//        masterPlay.classList.add('fa-pause-circle');
//        gif.style.opacity = 1;
//    }
//    else{
//        audioElement.pause();
//        masterPlay.classList.remove('fa-pause-circle');
//        masterPlay.classList.add('fa-play-circle');
//        gif.style.opacity = 0;
   
//    }
//    })
  
// // line 64
//    audioElement.src = '${index}.mp3';

// // line 61
// index = parseInt(e.target.id);
// // line 67,68
// masterPlay.classList.remove('fa-play-circle');
// masterPlay.classList.add('fa-pause-circle');




























// masterPlay.addEventListener("click", () => {
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })



// listen to Events
// audioElement.addEventListener('timeupdate', ()=>{
//     console.log('timeupdate');
//     // update seekbar
// progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
// console.log(progress);
// myProgressBar.value = progress;

// })









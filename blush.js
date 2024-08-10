console.log("welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let previous = document.querySelector('[data-id="previous"]');
let next = document.querySelector('[data-id="next"]');
let masterPlay = document.querySelector('[data-id="masterPlay"]');
let myprogressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
console.log('next'+next);
let songs =[
    {songName:"0 to 100", filepath : "1.mp3", coverpath : "cover1.jpg"},
    {songName:"East side flow", filepath : "2.mp3", coverpath : "cover1.jpg"},
    {songName:"Jatt Da Muqabla", filepath : "3.mp3", coverpath : "cover1.jpg"},
    {songName:"Just Listen", filepath : "4.mp3", coverpath : "cover1.jpg"},
    {songName:"Everybody Hurts", filepath : "5.mp3", coverpath : "cover1.jpg"},
    {songName:"Bloodlust", filepath : "6.mp3", coverpath : "cover1.jpg"},
    {songName:"US(feat-Rajakumari)", filepath : "7.mp3", coverpath : "cover1.jpg"},
    {songName:"B & W", filepath : "8.mp3", coverpath : "cover1.jpg"},
    {songName:"Moosedrilla", filepath : "9.mp3", coverpath : "cover1.jpg"},
    {songName:"Burberry", filepath : "10.mp3", coverpath : "cover1.jpg"},
]
songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

masterPlay.addEventListener('click', () => {
    console.log('playing');
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
      gif.style.opacity = 1;
    } else {
      audioElement.pause();
      masterPlay.classList.replace('fa-pause-circle', 'fa-play-circle');
      gif.style.opacity = 0;
    }
  });



audioElement.addEventListener('timeupdate', ()=> {
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogressBar.value = progress;
})


myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
           Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click', (e)=>{
makeAllPlays();
songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src =`${songIndex+1}.mp3`;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');


    })
})
// button for playing next song
next.addEventListener('click',()=>{
    console.log('next');
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
    songIndex += 1;
    console.log(songIndex);
    }
    audioElement.src =`${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

// button for playing previous song 
previous.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
    songIndex -= 1;
    }
    audioElement.src =`${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


const music = new Audio('music/Ajab Si.mp3');
//music.play();
const songs = [
  {
    id: 1,
    songName: ` Ajab Si
            <div class="subtitle">KK - The Voice of Hearts</div>`,
    poster: "img/Ajab Si.jpg",
  },
  {
    id: 2,
    songName: ` Dil Ibaadat
            <div class="subtitle">KK - The Voice of Hearts</div>`,
    poster: "img/Dil Ibaadat.jpg",
  },
  {
    id: 3,
    songName: ` Khuda Jaane
            <div class="subtitle">KK - The Voice of Hearts</div>`,
    poster: "img/Khuda Jaane.jpg",
  },
  {
    id: 4,
    songName: ` Kya Mujhe Pyyar Hai
            <div class="subtitle">KK - The Voice of Hearts</div>`,
    poster: "img/Kya Mujhe Pyaar Hai.jpg",
  },
  {
    id: 5,
    songName: ` Dil Kyon Ye Mera
            <div class="subtitle">KK - The Voice of Hearts</div>`,
    poster: "img/Dil Kyon.jpg",
  },
];

Array.from(document.getElementsByClassName('song_item')).forEach((e, i) => {
  e.getElementsByTagName('img')[0].src = songs[i].poster;
  e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let master_play = document.getElementById('master_play');
let wave = document.getElementById('wave');
master_play.addEventListener('click', () => {
  if ((music.paused || music.currentTime, +0)) {
    music.play();
    master_play.classList.remove('fa fa-play');
    master_play.classList.add('fa fa-pause');
  } else {
    music.pause();
    master_play.classList.add('fa fa-play');
    master_play.classList.remove('fa fa-pause');
  }
});

let custome_playlist_left = document.getElementById('custome_playlist_left');
let custome_playlist_right = document.getElementById('custome_playlist_right');
let playlists = document.getElementsByClassName('playlists')[0];

custome_playlist_right.addEventListener('click', () => {
  playlists.scrollLeft += 250;
});

custome_playlist_left.addEventListener('click', () => {
  playlists.scrollLeft -= 250;
});

let artist_left = document.getElementById('artist_left');
let artist_right = document.getElementById('artist_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

artist_left.addEventListener('click', () => {
  Artists_bx.scrollLeft += 250;
});

artist_left.addEventListener('click', () => {
  Artists_bx.scrollLeft -= 250;
});

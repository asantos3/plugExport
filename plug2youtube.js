var playlist = [];

var playlistSongs = document.getElementsByClassName('row playlist-media-item');

for (var i = 1; i <= playlistSongs.length + 1; i++) {
    var playlistSong = document.querySelector('.playlist-media .row:nth-child('+i+') img').getAttribute('src');
    var playlistSong = playlistSong.split('/');
    if(playlistSong[2] == "i.ytimg.com"){
        playlist.push(playlistSong[4]);   
    }
}

if(playlist.length > 0){
    var link = document.createElement('a');
    link.download = "plug";
    link.href = 'data:,' + playlist;
    link.click();
}
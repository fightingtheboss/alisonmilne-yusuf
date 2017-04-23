function togglePlay() {
  var audioTag = document.querySelector('audio');
  audioTag.paused ? audioTag.play() : audioTag.pause();
}

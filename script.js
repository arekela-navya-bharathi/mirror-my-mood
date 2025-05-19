let player;


(function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
})();


function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: '', 
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      playsinline: 1
    },
    events: {
      'onReady': event => event.target.mute() 
    }
  });
}


document.querySelectorAll('input[name="mood"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const color = radio.dataset.color;
    const thought = radio.dataset.thought;
    const videoId = radio.dataset.video;

    document.body.style.backgroundColor = color;
    document.getElementById('thought').textContent = thought;

    if (player && videoId) {
      player.loadVideoById(videoId);
      player.unMute();
    }
  });
});

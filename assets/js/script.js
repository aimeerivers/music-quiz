// Function to toggle play/stop for a specific audio clip
function togglePlayPause(clipId) {
  const audio = document.querySelector(`#${clipId} audio`);
  const button = document.querySelector(`#${clipId} .play-pause`);
  const icon = button.querySelector('.icon');

  // Stop all other audio clips
  document.querySelectorAll('audio').forEach((otherAudio) => {
    if (otherAudio !== audio) {
      otherAudio.pause();
      otherAudio.currentTime = 0; // Reset to the beginning
      const otherButton = otherAudio.closest('.audio-control').querySelector('.play-pause .icon');
      if (otherButton) otherButton.textContent = '▶'; // Reset icon to play
    }
  });

  // Toggle play/stop for the selected clip
  if (audio.paused || audio.currentTime === 0) {
    audio.play();
    icon.textContent = '⏸'; // Change icon to stop
  } else {
    audio.pause();
    audio.currentTime = 0; // Reset to the beginning
    icon.textContent = '▶'; // Change icon to play
  }

  // Reset icon to play when the audio ends
  audio.onended = () => {
    icon.textContent = '▶';
  };
}
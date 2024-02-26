// Gel Our Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Build out functions
const togglePlay = ( ) => {
  const method = video.paused ? 'play' : 'pause';
  video[method]();

}

const updateButton = (e) => {
  const icon = e.paused ? '►' : "||"
  toggle.textContent = icon;
}

const skip = (e) => {
  let dataSet = e.target.dataset;
  video.currentTime += parseFloat(dataSet.skip)
}

const handleRangeUpdate = (e) => {
  video[e.target.name] = e.target.value;
}

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//Hook up the event listeners
video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((btn) => btn.addEventListener('click', skip) )  

ranges.forEach( range => range.addEventListener('click', handleRangeUpdate) );
ranges.forEach( range => range.addEventListener('change', handleRangeUpdate) );


let mouseDown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e) )
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
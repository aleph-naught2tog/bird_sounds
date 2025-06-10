const AUDIO_FILE = '../audio/black_capped_chickadee.mp3';
const BACKGROUND = 'plum';

let birdSound;
let fft;

function preload() {
  birdSound = loadSound(AUDIO_FILE);
}

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.75);
  background(BACKGROUND);

  fft = new p5.FFT();
}

// what if bird colors???
// rotate
// pitch?

// QUESTION: how would I do the visualizer version around a circle?
function draw() {
  background(BACKGROUND);

  // this is all 0s until the sound plays
  const spectrum = fft.analyze();

  for (let i = 0; i < spectrum.length; i += 1) {
    const v = spectrum[i];
    // QUESTION: how do I make flip this upside down?
    const x = map(i, 0, spectrum.length, 0, width);

    push();
    noStroke();
    fill(v);
    ellipse(x, height / 2, 10, v * 2)
    pop();
  }
}

function mousePressed() {
  togglePlay();
}

function keyPressed() {
  // space
  if (keyCode === 32) {
    togglePlay();
  }
}

/// custom

function togglePlay() {
  if (birdSound.isPlaying()) {
    birdSound.pause();
  } else {
    birdSound.loop();
  }
}

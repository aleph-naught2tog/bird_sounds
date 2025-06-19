const AUDIO_FILE = '../audio/black_capped_chickadee.mp3';
const BACKGROUND = 'plum';

let birdSound;
let fft;

function preload() {
  birdSound = loadSound(AUDIO_FILE);
}

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.75);

  fft = new p5.FFT();
}

// what if bird colors???
// rotate
// pitch?
// line

// https://www.izotope.com/en/learn/understanding-spectrograms

let count = 0;

// QUESTION: how would I do the visualizer version around a circle?
function draw() {
  background(BACKGROUND);

  line(0, height / 2, width, height / 2);

  // this is all 0s until the sound plays
  // https://p5js.org/reference/p5.sound/p5.FFT/
  const frequencySpectrum = fft.analyze();

  const center = { x: width / 2, y: height / 2 };
  const radius = 100;

  for (let i = 0; i < frequencySpectrum.length; i += 1) {
    const amplitudeAtCurrentFrequency = frequencySpectrum[i];

    // QUESTION: how do I make flip this upside down?
    const x = map(i, 0, frequencySpectrum.length, 0, width);
    const y = (height - 2 * amplitudeAtCurrentFrequency) / 2;

    push();

    // noStroke();
    // ellipse(x, height / 2, 10, pitch * 2)

    circle(x, y, 1);
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

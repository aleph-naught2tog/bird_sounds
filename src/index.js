const AUDIO_FILE = '../audio/black_capped_chickadee.mp3';
const BACKGROUND = 'plum';

let birdSound;
let fft;

let mic;

function preload() {
  birdSound = loadSound(AUDIO_FILE);
}

function setup() {
  cnv = createCanvas(windowWidth * 0.9, windowHeight * 0.75);
  cnv.mousePressed(userStartAudio)

  mic = new p5.AudioIn();
  mic.start();

  getAudioContext().suspend()

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
  // const spectrum = fft.analyze();

  // beginShape();
  // noFill();

  let micLevel = mic.getLevel();
  let y = map(micLevel, 0, 1, 0, height * 1000);
  // console.debug({ y });
  // ellipse(width / 2, y, 10, 10);
  circle(width / 2, y, 10);

// text(getAudioContext().state, width/2, height/2);

  // for (let i = 0; i < spectrum.length; i += 1) {
  //   const amplitudeAtCurrentFrequency = spectrum[i];

  //   // QUESTION: how do I make flip this upside down?
  //   const x = map(i, 0, spectrum.length, 0, width);
  //   console.debug({ x, i, pitch: amplitudeAtCurrentFrequency })

  //   push();

  //   // noStroke();
  //   // fill(pitch);
  //   // ellipse(x, y, w, h)
  //   // fill('red')
  //   // ellipse(x, height / 2, 10, pitch * 2)

  //   fill('yellow')

  //   circle(x, (height - 2 * amplitudeAtCurrentFrequency) / 2, 1)
  //   // strokeWeight(4)
  //   // vertex(x, y)
  //   pop();
  // }

  // endShape(CLOSE);
}

function mousePressed() {
  // togglePlay();
}

function keyPressed() {
  // space
  // if (keyCode === 32) {
  //   togglePlay();
  // }
}

/// custom

function togglePlay() {
  // if (birdSound.isPlaying()) {
  //   birdSound.pause();
  // } else {
  //   birdSound.loop();
  // }
}

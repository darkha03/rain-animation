const rainContainer = document.getElementById('rain');
const dropCount = 100; // How heavy is the rain?
const baseDuration = Math.random() * 0.7 + 0.7;
const fallDuration = baseDuration * 0.8;

function addSplash(track, baseDuration) {
  const splash = document.createElement('div');
  splash.classList.add('splash');
  splash.style.left = '50%';
  splash.style.animationDuration = `${baseDuration * 0.2}s`;
  splash.style.opacity = track.dataset.dropOpacity;
  const splashHeight = parseFloat(track.dataset.fallDistance) || 100;
  splash.style.setProperty('--splash-height', `${splashHeight}vh`);

  splash.addEventListener('animationend', () => splash.remove());
  track.appendChild(splash);
}

function addFrontDrop(track) {
  const drop = document.createElement('div');
  drop.classList.add('drop', 'front-drop');
  drop.style.animationDuration = `${fallDuration}s`;
  drop.style.animationDelay = `${Math.random() * 2}s`;
  drop.style.opacity = Math.random() * 0.5 + 0.5;
  track.dataset.dropOpacity = drop.style.opacity;
  const fallDistance = Math.random() * 10 + 90; 
  drop.style.setProperty('--fall-distance', `${fallDistance}vh`);
  track.dataset.fallDistance = fallDistance;

  // Spawn a splash every time the drop finishes a fall 
  drop.addEventListener('animationiteration', () => addSplash(track, baseDuration));
  track.appendChild(drop);
}

function addMiddleDrop(track) {
  const drop = document.createElement('div');
  drop.classList.add('drop', 'middle-drop');
  drop.style.animationDuration = `${fallDuration * 1.5}s`;
  drop.style.animationDelay = `${Math.random() * 2}s`;
  drop.style.opacity = Math.random() * 0.3 + 0.2;
  track.dataset.dropOpacity = drop.style.opacity;
  const fallDistance = Math.random() * 10 + 80; 
  drop.style.setProperty('--fall-distance', `${fallDistance}vh`);
  track.dataset.fallDistance = fallDistance;
  // Spawn a splash every time the drop finishes a fall 
  drop.addEventListener('animationiteration', () => addSplash(track, baseDuration));
  track.appendChild(drop);
}

function addBackDrop(track) {
  const drop = document.createElement('div');
  drop.classList.add('drop', 'back-drop');
  drop.style.animationDuration = `${fallDuration * 2}s`;
  drop.style.animationDelay = `${Math.random() * 2}s`;
  drop.style.opacity = Math.random() * 0.2 + 0.1;
  track.dataset.dropOpacity = drop.style.opacity;
  const fallDistance = Math.random() * 10 + 70; 
  drop.style.setProperty('--fall-distance', `${fallDistance}vh`);
  track.dataset.fallDistance = fallDistance;
  // Spawn a splash every time the drop finishes a fall 
  drop.addEventListener('animationiteration', () => addSplash(track, baseDuration));
  track.appendChild(drop);
}


for (let i = 0; i < dropCount; i++) {
  
  // Create track for each drop
  const track = document.createElement('div');
  track.classList.add('track');
  track.style.left = Math.random() * 100 + 'vw';
  track.style.pointerEvents = 'none';
  track.style.position = 'absolute';

  // Create the raindrop
  randomChoice = Math.random();
  if (randomChoice < 0.4) {
    addFrontDrop(track);
  } else if (randomChoice < 0.75) {
    addMiddleDrop(track);
  } else {
    addBackDrop(track);
  }
  rainContainer.appendChild(track);
}
const cloudContainer = document.getElementById('cloud');
const numberOfClouds = 10; // How many clouds?

for (let i = 0; i < numberOfClouds; i++) {
    const left = `${Math.random() * 200 - 100}vw`;
    const top = `${Math.random() * 5}vh`;
    const animationDuration = `${Math.random() * 150 + 15}s`;
    const animationDelay = `${Math.random() * 2}s`;
    const index = Math.floor(Math.random() * 15); // Random z-index for layering
    createCloud(index, left, top, animationDuration, animationDelay);
}

function createCloud(index, left, top, animationDuration, animationDelay) {
  const cloud = document.createElement('div');
  cloud.classList.add('cloud');
  cloud.style.zIndex = index;
  cloud.style.left = left;
  cloud.style.top = top;
  cloud.style.animationDuration = animationDuration;
  cloud.style.animationDelay = animationDelay;
  const scale = 0.6 + Math.random() * 0.9; // 0.6–1.5x size variance
  cloud.style.setProperty('--cloud-scale', scale);
  cloud.addEventListener('animationiteration', () => {
    cloud.style.left = '-250px';
    cloud.style.transform = `translateX(0) scale(${scale})`;
  });
  cloudContainer.appendChild(cloud);
}


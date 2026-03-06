# Rain Animation

A lightweight, single-page rain scene that layers falling drops, splashes, drifting fog, and parallax clouds to mimic a stormy night sky. Everything runs on vanilla HTML/CSS/JS—no build step required.

## Features
- Layered rainfall with varied speeds, sizes, and depths for a sense of foreground and background
- Splash effects triggered on each drop cycle for added motion detail
- Drifting fog overlay to soften the scene and add atmosphere
- Parallax cloud layer with randomized opacity, blur, scale, and speed for depth
- Pure client-side implementation; open locally or serve with any static host

## Tech Stack
- HTML for structure and container elements
- CSS for layout, gradients, and keyframe animations
- Vanilla JavaScript for procedural generation of drops, splashes, and clouds

## Demo

https://github.com/user-attachments/assets/11cec559-987a-4a22-b51d-463f392a6ba9

<video controls width="720">
	<source src="https://github.com/user-attachments/assets/11cec559-987a-4a22-b51d-463f392a6ba9" type="video/mp4">
	Your browser does not support the video tag.
</video>

- Adjust `dropCount` in `rain.js` and `numberOfClouds` in `cloud.js` to tweak intensity and density.

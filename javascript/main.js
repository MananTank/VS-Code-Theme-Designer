import makeTheme, { scopes, others, layout } from './makeTheme.js';
import copyToClipboard from './copyToClipboard.js';
import { HSLToHex, hexToHSL } from './conversion.js';

let selectedColor = null;
let selectedSection = null;
let selectedKey = null;

let hue = 180;
let saturation = 100;
let lightness = 100;

const selection = document.querySelector('.selection');
const selectionInfo = document.querySelector('.selection .info');
const selectionInputText = document.querySelector('.selection input[type="text"]');
// hsl sliders
const lightInput = document.querySelector('.lightness input');
const hueInput = document.querySelector('.hue input');
const satInput = document.querySelector('.saturation input');
// all hsl slider inputs
const sliderInputs = document.querySelectorAll('.slider input');

function darker(x) {
	return `hsl(${hue}deg, ${saturation}%, ${Number(lightness) - x}%)`;
}

// Update color in UI and in object
function setColor() {
	const newColor = HSLToHex(hue, saturation, lightness);
	selectedColor.style.setProperty('--color', newColor);
	document.documentElement.style.setProperty(`--${selectedKey}`, newColor);

	if (lightness > 60) {
		selection.style.setProperty('--font', 'black');
		selection.style.setProperty('--border', darker(10));
	} else {
		selection.style.setProperty('--font', 'white');
		selection.style.setProperty('--border', 'white');
	}
	selection.style.setProperty('--color', newColor);
	selectedSection[selectedKey].hex = newColor;
}

// when hex text is changed
selectionInputText.addEventListener('input', e => {
	setHSLFromHex(e.target.value);
	updateHSLSliders();
	updateColor();
});

function updateText() {
	// update text
	const newColor = HSLToHex(hue, saturation, lightness);
	selectionInputText.value = newColor;
}

// set color as text in input
// set color in selected color
function updateColor() {
	setColor();
	// update h, s, l in css
	selection.style.setProperty('--h', hue + 'deg');
	selection.style.setProperty('--s', saturation + '%');
	selection.style.setProperty('--l', lightness + '%');
}

function updateHSLSliders() {
	// update values
	hueInput.value = hue;
	satInput.value = saturation;
	lightInput.value = lightness;
	// update bubbles
	updateBubble(hueInput);
	updateBubble(satInput);
	updateBubble(lightInput);
}

// call update color
// set hsl values in sliders
// set bubbles
function updateInputs() {
	updateColor();
	updateHSLSliders();
}

function updateBubble(s) {
	const bubble = s.parentNode.querySelector('.bubble');
	bubble.style.left = ((s.value - s.min) * 100) / (s.max - s.min) + '%';
}

sliderInputs.forEach(s => {
	s.addEventListener('input', e => {
		updateBubble(s);
	});

	s.addEventListener('mousedown', e => {
		s.parentNode.querySelector('.bubble').style.transition = 'none';
	});

	s.addEventListener('mouseup', e => {
		s.parentNode.querySelector('.bubble').style.transition = null;
	});
});

// HSL SLIDERS
// WHEN CHANGED, update color
hueInput.addEventListener('input', e => {
	hue = e.target.value;
	updateColor();
	updateText();
});

satInput.addEventListener('input', e => {
	saturation = e.target.value;
	updateColor();
	updateText();
});

lightInput.addEventListener('input', e => {
	lightness = e.target.value;
	updateColor();
	updateText();
});

function setHSLFromHex(hex) {
	const [h, s, l] = hexToHSL(hex);
	hue = h;
	saturation = s;
	lightness = l;
	return l;
}

function getInfos(info) {
	return info.map(i => `<p> ${i} </p>`).join('\n');
}

function makePallete(colors, targetPallete) {
	const pallete = document.querySelector(targetPallete + ' .pallete');
	for (let key in colors) {
		// create color
		const color = document.createElement('div');
		color.className = 'color';
		pallete.appendChild(color);

		// set hsl
		const l = setHSLFromHex(colors[key].hex);
		if (l > 95) {
			// color is very light
			color.style.border = '1px dotted black';
		}

		// set color for color node and other layout that uses it
		color.style.setProperty('--color', colors[key].hex);
		document.documentElement.style.setProperty(`--${key}`, colors[key].hex);
		color.addEventListener('click', () => {
			// update selected stuff
			selectedSection = colors;
			selectedKey = key;

			// update info, text
			selectionInfo.innerHTML = getInfos(colors[key].info);
			selectionInputText.value = colors[key].hex;

			// set hsl
			const l = setHSLFromHex(colors[key].hex);
			if (l > 90) {
				// color is very light
				color.style.border = '1px dotted black';
			}

			// make this active
			selectedColor.classList.remove('active');
			selectedColor = color;
			selectedColor.classList.add('active');

			updateInputs();
		});
	}
}

function setDefaultSelected() {
	selectedColor = document.querySelector('.color');
	selectedColor.classList.add('active');
	selectedSection = layout;
	selectedKey = 'c10';
	setHSLFromHex(layout['c10'].hex);
	updateInputs();
	updateText();
	selectionInfo.innerHTML = getInfos(layout['c10'].info);
}

// RUN -----------------------
makePallete();
makeTheme();
makePallete(scopes, '.scopes');
makePallete(layout, '.layout');
makePallete(others, '.others');
setDefaultSelected();
document.querySelector('.copy').addEventListener('click', copyToClipboard);

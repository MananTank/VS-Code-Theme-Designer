// hsl sliders
const lightInput = document.querySelector('.lightness input');
const hueInput = document.querySelector('.hue input');
const satInput = document.querySelector('.saturation input');

// when hex text is changed
hexInput.addEventListener('input', e => {
	selected.color.setHEX(e.target.value);
	updateHSLSliders();
});

function updateBubble(s) {
	const bubble = s.parentNode.querySelector('.bubble');
	bubble.style.left = ((s.value - s.min) * 100) / (s.max - s.min) + '%';
}

document.querySelectorAll('.slider input').forEach(s => {
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
	selected.color.h = e.target.value;
	updateHexInput();
	handleColorChange();
	updateSelectionVariables();
});

satInput.addEventListener('input', e => {
	selected.color.s = e.target.value;
	updateHexInput();
	handleColorChange();
	updateSelectionVariables();
});

lightInput.addEventListener('input', e => {
	selected.color.l = e.target.value;
	updateHexInput();
	handleColorChange();
	updateSelectionVariables();
});

function updateHSLSliders() {
	// update values
	hueInput.value = selected.color.h;
	satInput.value = selected.color.s;
	lightInput.value = selected.color.l;

	// update bubbles
	updateBubble(hueInput);
	updateBubble(satInput);
	updateBubble(lightInput);
}

// when the color is changed via either a slider or hex input
function handleColorChange() {
	const newColor = selected.color.getHEX();
	// change selected color div's color in rendering
	selected.pallete[selected.key] = newColor;
	updateCssVar(selected.key, newColor);
	// change in pallete for json
	dottify();
}

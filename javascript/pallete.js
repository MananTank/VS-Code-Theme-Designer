function makePallete(pallete, targetPallete) {
	// get target pallete div
	const palleteNode = document.querySelector(targetPallete + ' .pallete');

	// add colors in pallete
	for (let key in pallete) {
		//
		const color = pallete[key].hex;

		// add the color in document as css variable
		updateCssVar(key, color);

		// create and add color div to pallete
		const colorDiv = document.createElement('div');
		colorDiv.className = 'color';
		colorDiv.addEventListener('click', handleClick);
		palleteNode.appendChild(colorDiv);

		// set background color
		colorDiv.style.backgroundColor = `var(--${key})`;

		dottify(color, colorDiv);
		// if the color is very bright, add border around it

		function handleClick() {
			// update selected
			selected.pallete = pallete;
			selected.key = key;
			selected.color.setHEX(color);

			updateHSLSliders();
			updateTargets();
			updateHexInput();
			updateSelectedColor(colorDiv);
		}
	}
}

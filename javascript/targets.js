function updateTargets() {
	// remove old selectionInfo
	selectionInfo.innerHTML = '';

	// create Ps for each entry in info
	selected.pallete[selected.key].info.forEach(info => {
		// create p
		const p = document.createElement('p');
		p.textContent = info.name;

		// find its selectionInfo
		const targetNodes = document.querySelectorAll('.target-' + info.id);

		// if it has selectionInfo
		if (targetNodes.length) {
			p.addEventListener('mouseover', e => {
				targetNodes.forEach(target => {
					let rgb;
					if (info.forColor) {
						rgb = getComputedStyle(target).getPropertyValue('color');
					} else {
						rgb = getComputedStyle(target).getPropertyValue('background');
					}
					const hex = RGBToHex(rgb);
					const [h, s, l] = hexToHSL(hex);
					const col = `hsl(${h}deg, ${s}%, ${l}%)`;
					const lighter = `hsl(${h}deg, ${s}%, ${l + 20}%)`;
					const darker = `hsl(${h}deg, ${s}%, ${l - 20}%)`;

					if (info.forColor) {
						// target.style.textShadow = `0 0 0.5em ${col}`;
						target.style.fontWeight = 'bold';
						target.style.filter = 'none';
						target.style.opacity = 1;
						document.querySelector('.editor').classList.add('dim');
					} else {
						target.style.color = 'transparent';
						target.style.background = `repeating-linear-gradient(45deg, ${lighter} 0 1px, ${hex} 0 5px)`;
					}
					// target.style.animation = 'highlight 200ms linear infinite';
				});
			});

			p.addEventListener('mouseout', e => {
				targetNodes.forEach(target => {
					if (info.forColor) {
						// target.style.textShadow = null;
						target.style.fontWeight = null;
						target.style.filter = null;
						target.style.opacity = null;
						document.querySelector('.editor').classList.remove('dim');
					} else {
						target.style.color = null;
						target.style.background = null;
					}
					// target.style.backgroundColor = null;
					// target.style.animation = null;
				});
			});
		}

		// if it does not have selectionInfo, disable it
		else {
			p.classList.add('disable');
		}

		selectionInfo.appendChild(p);
	});
}

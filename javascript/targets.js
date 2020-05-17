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

		const hasTarget = targetNodes.length;
		const hasTargetIndependantOfPage = hasTarget && !info.pages;
		const targetDependantOnPage = info.pages;
		const targetOnCurrentPage = targetDependantOnPage && info.pages.includes(currentPageClass);

		// if it has target on current page
		// if it has any targets
		// if those are limited in certain pages only, check if we are on that page
		if (hasTarget && (hasTargetIndependantOfPage || targetOnCurrentPage)) {
			p.addEventListener('mouseover', e => {
				targetNodes.forEach(target => {
					//
					let rgb = getComputedStyle(target).getPropertyValue('background');
					const hex = RGBToHex(rgb);
					const h = hexToHSL(hex)[0];
					const invert = `hsl(${h + 150}deg, ${100}%, ${50}%)`;

					if (info.forBefore) {
						target.style.setProperty('--hide', invert);
					}

					if (info.forBorder) {
						target.style.borderBottom = `1px solid ${invert}`;
						target.style.borderRight = `1px solid ${invert}`;
					}

					if (info.forChildren) {
						target.querySelectorAll('div').forEach(c => {
							c.style.background = invert;
						});
					}

					if (info.forColor) {
						target.style.filter = 'none';
						target.style.opacity = 1;
						document.querySelector('.editor').classList.add('dim');
					}
					if (info.forBg) {
						target.style.background = invert;
					}
				});
			});

			p.addEventListener('mouseout', e => {
				targetNodes.forEach(target => {
					if (info.forBefore) {
						target.style.setProperty(`--hide`, null);
					}

					if (info.forBorder) {
						target.style.borderBottom = null;
						target.style.borderRight = null;
					}

					if (info.forChildren) {
						target.querySelectorAll('div').forEach(c => {
							c.style.background = null;
						});
					}

					if (info.forColor) {
						target.style.filter = null;
						target.style.opacity = null;
						document.querySelector('.editor').classList.remove('dim');
					}

					if (info.forBg) {
						target.style.background = null;
					}
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

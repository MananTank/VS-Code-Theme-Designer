// make palletes
makePallete(scopes, '.scopes');
makePallete(layout, '.layout');
makePallete(others, '.others');

// set default selected
const firstKey = Object.keys(layout)[0];
selected.pallete = layout;
selected.key = firstKey;
selected.color.node = document.querySelector('.color');
selected.color.node.classList.add('active');
selected.color.setHEX(layout[firstKey].hex);
updateSelectionVariables();
updateHexInput();
updateTargets(layout[firstKey].info);
updateHSLSliders();

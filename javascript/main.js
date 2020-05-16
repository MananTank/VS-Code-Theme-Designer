// make palletes
makePallete(scopes, '.scopes');
makePallete(layout, '.layout');
makePallete(others, '.others');

// set default selected
selected.color.node = document.querySelector('.color');
selected.color.node.classList.add('active');
selected.color.setHEX(layout['c10'].hex);

updateSelectionVariables();
updateHexInput();
updateTargets(layout['c10'].info);

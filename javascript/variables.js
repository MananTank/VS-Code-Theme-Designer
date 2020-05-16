// app state
const selected = {
	pallete: layout,
	key: 'c10',
	color: {
		node: null,

		h: 180,
		s: 180,
		l: 180,

		getHSL: function () {
			return `hsl(${this.h}, ${this.s}, ${this.l})`;
		},

		getHEX: function () {
			return HSLToHex(this.h, this.s, this.l);
		},

		setHSL: function (h, s, l) {
			if (s > 100) s = 100;
			if (l > 100) l = 100;
			this.h = h;
			this.s = s;
			this.l = l;
		},

		setHEX: function (hex) {
			this.setHSL(...hexToHSL(hex));
		},
	},
};

const selection = document.querySelector('.selection');
const selectionInfo = document.querySelector('.selection .info');
const hexInput = document.querySelector('.selection input[type="text"]');

function updateHexInput() {
	hexInput.value = selected.color.getHEX();
}

function dottify(color = selected.color.getHEX(), colorDiv = selected.color.node) {
	if (getLightness(color) > 90) {
		const [h, s, l] = hexToHSL(color);
		colorDiv.style.border = `1px dotted ${darker(30, { h, s, l })}`;
	}
}

// when a new color is selected by clicking on the color itself
function updateSelectionVariables() {
	const isLight = selected.color.l > 80;

	const props = {
		h: selected.color.h + 'deg',
		s: selected.color.s + '%',
		l: selected.color.l + '%',
		color: selected.color.getHEX(),
		font: isLight ? 'black' : 'white',
		border: isLight ? darker(20) : 'white',
		hover: isLight ? darker(20) : lighter(20),
	};

	for (let key in props) {
		selection.style.setProperty(`--${key}`, props[key]);
	}
}

function updateSelectedColorNode(newColorNode) {
	selected.color.node.classList.remove('active');
	selected.color.node = newColorNode;
	selected.color.node.classList.add('active');
}

function updateCssVar(name, value) {
	document.documentElement.style.setProperty(`--${name}`, value);
}

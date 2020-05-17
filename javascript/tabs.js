let pages = ['.js', '.html', '.css', '.react', '.pug', '.stylus'];

let currentPageClass = '.js';

const files = document.querySelectorAll('.side-bar .file');
const tabs = document.querySelectorAll('.tabs .tab');

let currentFile = document.querySelector('.file.active');
let currentPage = document.querySelector('.editor .show');
let currentTab = document.querySelector('.tabs .tab');

function handleClick(index) {
	// tab
	currentTab.classList.remove('active');
	currentTab = tabs[index];
	currentTab.classList.add('active');
	// page
	currentPage.classList.remove('show');
	currentPage = document.querySelector(`.editor ${pages[index]}`);
	currentPage.classList.add('show');
	// class
	currentPageClass = pages[index];
	// file
	currentFile.classList.remove('active');
	currentFile = files[index];
	currentFile.classList.add('active');
	updateTargets();
}

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		handleClick(index);
	});
});

files.forEach((file, index) => {
	file.addEventListener('click', () => {
		handleClick(index);
	});
});

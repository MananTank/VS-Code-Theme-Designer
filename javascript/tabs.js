let pages = ['.js', '.html', '.css', '.react', '.pug', '.stylus'];

let currentTab = document.querySelector('.tabs .tab');
let currentPageClass = '.js';
let currentPage = document.querySelector('.editor .show');

console.log('current page is', currentPage);

const tabs = document.querySelectorAll('.tabs .tab');
tabs.forEach((tab, index) => {
	tab.addEventListener('click', e => {
		currentTab.classList.remove('active');
		currentTab = tab;
		currentTab.classList.add('active');
		currentPage.classList.remove('show');
		currentPage = document.querySelector(`.editor ${pages[index]}`);
		currentPage.classList.add('show');
		currentPageClass = pages[index];
		console.log('current page class is ', currentPageClass);
		updateTargets();
	});
});

let pages = ['.js', '.html', '.css', '.react', '.stylus', '.pug', '.svelte'];

let currentTab = document.querySelector(pages[0]);

const tabs = document.querySelectorAll('.tabs .tab');
tabs.forEach((tab, index) => {
	tab.addEventListener('click', e => {
		console.log('clicked ', index, pages[index]);
		// currentTab.
	});
});

let pages = ['.js', '.html', '.css', '.react', '.stylus', '.pug', '.svelte'];

let currentTab = document.querySelector('.tabs .tab');

const tabs = document.querySelectorAll('.tabs .tab');
tabs.forEach((tab, index) => {
	tab.addEventListener('click', e => {
		currentTab.classList.remove('active');
		currentTab = tab;
		currentTab.classList.add('active');
		console.log(pages[index]);
	});
});

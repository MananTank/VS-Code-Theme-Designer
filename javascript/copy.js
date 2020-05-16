const copyButton = document.querySelector('.copy');

// COPY TO CLIPBOARD
function copyToClipboard() {
	makeTheme();
	const copyText = document.querySelector('textarea');
	copyText.select();
	copyText.setSelectionRange(0, 99999); /*For mobile devices*/
	document.execCommand('copy');
	copyButton.textContent = 'COPIED !';
	setTimeout(() => {
		copyButton.textContent = 'COPY THEME.JSON';
	}, 2000);
}

// copy
document.querySelector('.copy').addEventListener('click', copyToClipboard);

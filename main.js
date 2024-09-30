const moreInfo = document.getElementById('more-info');
const moreInfoButton = document.getElementById('more-info-btn');
moreInfoButton.addEventListener('click', () => {
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
				moreInfoButton.textContent = 'Less Info';
    } else {
        moreInfo.style.display = 'none';
				moreInfoButton.textContent = 'More Info';
    }
});


export default function Header() {
	// data / model
	const headerVisibleThreshold = 200;
	
	let headerVisible = true;
	let navigationVisible = false;

	let currentScrollDirection = null; // "up" / "down"
	let previousScrollPosition = 0;
	
	// query selectors
	const header = document.querySelector('.header');
	const headerNavigation = document.querySelector('.header__navigation');
	const headerMenuButton = document.querySelector('.header__navigation-menu');

	// event listeners
	if (header !== null) {
		headerMenuButton.addEventListener('click', handleHeaderButtonClick);
		window.addEventListener('scroll', handleWindowScroll);
	}

	// event handlers
	function handleHeaderButtonClick(event) {
		toggleNavigation();
		renderHTML();
	}

	function handleWindowScroll(event) {
		toggleHeaderVisibility();
		renderHTML();
	}

	// methods
	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}

	function toggleHeaderVisibility() {
		const scrollY = window.scrollY;

		if (scrollY > previousScrollPosition) {
			currentScrollDirection = 'down';
		} else {
			currentScrollDirection = 'up';
		}

		previousScrollPosition = scrollY;
	}

	// render
	function renderHTML() {
		if (navigationVisible === true) {
			headerNavigation.classList.add('header__navigation--visible');
		} else {
			headerNavigation.classList.remove('header__navigation--visible');
		}

		if (currentScrollDirection === 'down' && scrollY >= headerVisibleThreshold) {
			header.classList.add('header--hidden');
		} else {
			header.classList.remove('header--hidden');
		}
	}
}
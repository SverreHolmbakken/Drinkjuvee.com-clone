export default function ShopSlideshow() {
	let currentIndex

	// Query selectors
	const slideshow = document.querySelector('.shop-slideshow');
	const slideshowSlides = document.querySelectorAll('.shop__slide');
	const buttons = document.querySelectorAll('.shop__item-button');

	// Event listeners
	buttons.forEach(button => {
		button.addEventListener('click', handleButtonSwitchSlide)
	})

	// Event handlers
	function handleButtonSwitchSlide(event) {
		currentIndex = event.currentTarget.dataset.index
		updateSlideshowHTML()
	}
	

	// Methods
	function updateSlideshowHTML() {
		for (const slide of slideshowSlides) {
			slide.classList.remove('shop__slide--active');
		}
		slideshowSlides[currentIndex].classList.add('shop__slide--active')
	}
}
export default function ShopSlideshow() {
	let currentIndex = 0;
	let index
	let count = [
		{
			count: 1
		},
		{
			count: 1
		},
		{
			count: 1
		},
		{
			count: 1
		},
	]
	

	// Query selectors
	const slideshow = document.querySelector('.shop-slideshow');
	const slideshowSlides = document.querySelectorAll('.shop__slide');
	const productButtons = document.querySelectorAll('.shop__item-button');
	const inputNumber = document.querySelectorAll('.shop__add-to-cart-number');
	const subtractButton = document.querySelectorAll('.shop__subtract');
	const additionButton = document.querySelectorAll('.shop__add');

	// Event listeners
	productButtons.forEach(button => {
		button.addEventListener('click', handleButtonSwitchSlide)
	})

	subtractButton.forEach(button => {
		button.addEventListener('click', handleDecreaseNumber)
	})
	
	additionButton.forEach(button => {
		button.addEventListener('click', handleIncreaseNumber)
	})

	// Event handlers
	function handleButtonSwitchSlide(event) {
		currentIndex = event.currentTarget.dataset.index
		updateSlideshowHTML()
	}
		if (count > 1) {
			count--;
			inputNumber[currentIndex].innerHTML = count;
	}
	function handleDecreaseNumber(event) {
		if (count[currentIndex].count >= 1) {
			count[currentIndex].count -=1
			inputNumber[currentIndex].innerHTML = count[currentIndex].count;
		}
	}

	function handleIncreaseNumber(event) {
		if (count[currentIndex].count >= 1) {
			count[currentIndex].count +=1
			inputNumber[currentIndex].innerHTML = count[currentIndex].count;
		}
	}
	

	// Methods
	function updateSlideshowHTML() {
		for (const slide of slideshowSlides) {
			slide.classList.remove('shop__slide--active');
		}
		slideshowSlides[currentIndex].classList.add('shop__slide--active')
	}

}
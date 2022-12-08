export default function ShopSlideshow() {
	let currentIndex = 0;
	let index
	let slideshowCounter = [
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
	const addToCartButton = document.querySelectorAll('.add-to-cart-button')

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

	addToCartButton.forEach(button => {
		button.addEventListener('click', handleAddToCart)
	})

	// Event handlers
	function handleButtonSwitchSlide(event) {
		currentIndex = event.currentTarget.dataset.index
		RenderHTML()
	}
		if (slideshowCounter > 1) {
			count--;
			inputNumber[currentIndex].innerHTML = count;
	}
	
	function handleDecreaseNumber(event) {
		if (slideshowCounter[currentIndex].count > 1) {
			slideshowCounter[currentIndex].count -=1
			inputNumber[currentIndex].innerHTML = slideshowCounter[currentIndex].count;
		}
	}

	function handleIncreaseNumber(event) {
		if (slideshowCounter[currentIndex].count >= 1) {
			slideshowCounter[currentIndex].count +=1
			inputNumber[currentIndex].innerHTML = slideshowCounter[currentIndex].count;
		}
	}

	function handleAddToCart(event) {
		
	}

	// Methods
	function RenderHTML() {
		for (const slide of slideshowSlides) {
			slide.classList.remove('shop__slide--active');
		}
		slideshowSlides[currentIndex].classList.add('shop__slide--active')
	}
}
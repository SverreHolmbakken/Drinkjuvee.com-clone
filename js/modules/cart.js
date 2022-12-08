export default function Cart() {
	let currentCartItems = GetItemsFromLocal();

	// Array of items
	const shopItems = [
		{
			name: 'Kiwi Strawberry',
			image: 'assets/images/cart/Juvee_Tray_Mockup_Kiwi_2048x.webp',
			description: '12 pack',
			price: 36,
		},
		{
			name: 'Tropical Crush',
			image: 'assets/images/cart/Juvee_Tray_Mockup_Tropical_2000x.webp',
			description: '12 pack',
			price: 36,
		},
		{
			name: 'Watermelon Lime',
			image: 'assets/images/cart/Juvee_Tray_Mockup_Watermelon_2000x.webp',
			description: '12 pack',
			price: 36,
		},
		{
			name: 'Variety Pack',
			image: 'assets/images/cart/juvee_variety_pack_2000x.webp',
			description: '12 pack',
			price: 36,
		}
	]

	let cartObject = {};

	// Query selectors
	const addToCartButton = document.querySelectorAll('.add-to-cart-button');
	const itemsInCart = document.querySelector('.header__shopping-cart-number');
	const checkoutArea = document.querySelector('.cart__items');
	const checkoutTotal = document.querySelector('.cart__summary-subtotal-price');
	const checkoutButton = document.querySelector('.cart__summary-check-out-button');
	const clearCartButton = document.querySelector('.cart__summary-clear-cart-button');

	// Event Listeners

	/**
	 * Having problems, getting errors that 'addToCartButton.addEventListener' isn't a function.
	 * 
	 * @todo Find a solution to this problem.
	 */
	if (addToCartButton) {
		addToCartButton.addEventListener('click', handleAddToCartButton);
	}
	
	if (checkoutButton) {
		checkoutButton.addEventListener('click', handleClearCartAndGetOutOfHere);
	}
	
	if (clearCartButton) {
		clearCartButton.addEventListener('click', handleClearCartButton);
	}

	// Event Handlers
	function handleAddToCartButton() {
		createCartObject();
		const itemInCart = verifyItemInCart();
		if (itemInCart) {
			changeItemQuantityInCart();
		} else {
			addItemToCart();
		}
		renderHTML();
	}
	
	function handleClearCartButton() {
		clearLocalStorage();
	}

	function handleClearCartAndGetOutOfHere()	{
		clearLocalStorage();
		getOutOfHere();
	}

	//Create object from /shop-item.js file
	function createCartObject() {
		cartObject = {
			itemName: shopItems.name,
			itemImage: shopItems.image,
			itemDescription: shopItems.description,
			itemPrice: shopItems.price,
			itemQuantity: 1,
		};
		console.log(cartObject)
	}

	//Calculates total value of all items
	function calculateCartSum() {
		const cartItems = currentCartItems;

		return cartItems.reduce((total, currentCartItem) => {
			return total + (currentCartItem.itemPrice * currentCartItem.itemQuantity);
		}, 0);
	}

	// Changes quantity of items in cart
	// function changeItemQuantityInCart() {
	// 	let indexOfExistingItem = currentCartItems.findIndex(item => {
	// 		return item.itemName === cartObject.itemName;
	// 	})
	// 	currentCartItems[indexOfExistingItem].itemQuantity += 1;
	// }
	
	// Adds item to cart
	function addItemToCart() {
		currentCartItems.push(cartObject);
	}
	
	// Local storage - saves
	function saveToLocalStorage() {
		localStorage.setItem('cart', JSON.stringify(currentCartItems));
	}
	
	// Local storage - fetch
	function GetItemsFromLocal() {
		if (JSON.parse(localStorage.getItem('cart'))) {
			return JSON.parse(localStorage.getItem('cart'));
		} else {
			return [];
		}
	}

	// Empty local storage
	function clearLocalStorage() {
		localStorage.clear();
	}

	function getOutOfHere() {
		window.location.href = "/";
	}
	
	// Renders
	function renderCartSum() {
		const cartSum = calculateCartSum();
		checkoutTotal.innerText = '$' + cartSum;
	}
}
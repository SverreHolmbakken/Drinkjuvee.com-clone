export default function Cart() {
	let items = getItemsLocally();

	const cartAddInput = document.querySelector('.cart__add-input');
	const cartAddButton = document.querySelector('.cart__add-button');
	const cartItemsContainer = document.querySelector('.cart__items');

	cartAddButton.addEventListener('click', handleCartAddButtonClick);

	

		

	function handleCartAddButtonClick(event) {
		addNewItem();
		renderHTML();
	}

	function handleItemDeleteButtonClick(event) {
		const item = event.currentTarget.parentElement.parentElement;

		deleteItem(item.dataset.index);
		renderHTML();
	}

	function handleItemDoneButtonClick(event) {
		const item = event.currentTarget.parentElement.parentElement;

		markItemDone(item.dataset.index);
		renderHTML();
	}

	function addNewItem() {
		const currentInput = cartAddInput.value;

		if (currentInput !== '') {
			items.push({
				text: currentInput,
				done: false
			});
		}

		storeItemLocally();
	}

	function deleteItem(index) {
		items.splice(index, 1);

		storeItemLocally();
	}

	function markItemDone(index) {
		items[index].done = !items[index].done;

		storeItemLocally();
	}

	function storeItemLocally() {
		const key = 'cart-list';
		const value = JSON.stringify(items);

		window.localStorage.setItem(key, value);
	}


	function getItemsLocally() {
		const key = 'cart-list';
		const itemAsAString = window.localStorage.getItem(key);

		if (itemAsAString) {
			return JSON.parse(itemAsAString);
		} else {
			return [];
		}
	}
	
	function returnItemDOMElement(item,index) {
		const itemElement = document.createElement('div');
		const itemElementText = document.createElement('div');
		const itemElementButtons = document.createElement('div');
		const itemElementDeleteButton = document.createElement('button');
		const itemElementDoneButton = document.createElement('button');
		const itemElementBetweenDeleteDone = document.createElement('div');
		itemElementBetweenDeleteDone.classList.add('cart__item-buttons-space-between');

		itemElement.className = 'cart__item';
		itemElement.dataset.index = index;

		itemElementText.innerText = item.text;
		itemElementText.className = 'cart__item-text';
		
		if(item.done === true) {
			itemElement.classList.add('cart__item--done');
		}

		itemElementDeleteButton.innerText = 'Delete';
		itemElementBetweenDeleteDone.innerText = '|'
		itemElementDoneButton.innerText = item.done === true ? 'Undo' : 'Done';

		itemElementButtons.className = 'cart__item-buttons';

		itemElementDeleteButton.addEventListener('click', handleItemDeleteButtonClick);
		itemElementDoneButton.addEventListener('click', handleItemDoneButtonClick);

		itemElementButtons.appendChild(itemElementDeleteButton);
		itemElementButtons.appendChild(itemElementBetweenDeleteDone);
		itemElementButtons.appendChild(itemElementDoneButton);

		itemElement.appendChild(itemElementText);
		itemElement.appendChild(itemElementButtons);

		return itemElement;
	}

	function renderHTML() {
		cartItemsContainer.innerHTML = '';

		items.forEach((item, index) => {
			const itemElement = returnItemDOMElement(item, index);
			cartItemsContainer.appendChild(itemElement);
		});
	}

	renderHTML();
}
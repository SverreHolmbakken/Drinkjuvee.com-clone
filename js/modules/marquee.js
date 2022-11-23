export default function Marquee() {
	let speed = 4;
	let lastScrollPos = 0;
	let timer;
	const marquee = document.querySelectorAll('.marquee');

	marquee.forEach(function(el) {
		const container = el.querySelector('.inner');
		const content = el.querySelector('.inner > *');
		//Get total width
		const elWidth = content.offsetWidth;
		//Duplicate content
		let clone = content.cloneNode(true);
		container.appendChild(clone);
		let progress = 1;
		function loop() {
			progress = progress - speed;
			if(progress <= elWidth * -1) {
				progress = 0;
			}
			container.style.transform = 'translateX(' + progress + 'px)';
			container.style.transform += 'skewX(' + speed * 0.4 + 'deg)';
			window.requestAnimationFrame(loop);
		}

		loop();

	});
};
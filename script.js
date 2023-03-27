const navBtn = document.querySelector('.btn-nav');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav__link');
const header = document.querySelector('.header');

// links.forEach(link =>
// 	link.addEventListener('click', function () {
// 		nav.classList.remove('open-navigation');
// 		document.documentElement.classList.remove('scrolY-disabled');
// 	})
// );

/// OBSERVER
let headerHeight = header.getBoundingClientRect().height;
let options = {
	root: null,
	threshold: 0,
	rootMargin: `-${headerHeight}px`,
};

let heroSectionObserver = new IntersectionObserver(function (entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) {
		document.body.classList.add('sticky');
	} else {
		document.body.classList.remove('sticky');
	}
}, options);

heroSectionObserver.observe(document.querySelector('.section-hero'));

const styleScrollPaddingTop = function () {
	const header = document.querySelector('.header');
	headerHeight = header.getBoundingClientRect().height;
	document.documentElement.style.setProperty('--scroll-padding', headerHeight + 'px');
	options.rootMargin = `-${headerHeight}px`;
	console.log(options);
	heroSectionObserver.unobserve(document.querySelector('.section-hero'));
	heroSectionObserver.observe(document.querySelector('.section-hero'));
};

styleScrollPaddingTop();

/// PADDING TOP SCROLL
window.addEventListener('resize', styleScrollPaddingTop);

/// LISTENERS

nav.addEventListener('click', function (e) {
	if (e.target.closest('.nav__item')) {
		nav.classList.remove('open-navigation');
		document.documentElement.classList.remove('scrolY-disabled');
	}
});

navBtn.addEventListener('click', function () {
	nav.classList.toggle('open-navigation');
	document.documentElement.classList.toggle('scrolY-disabled');
});

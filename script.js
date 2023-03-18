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
const headerHeight = header.getBoundingClientRect().height;
const options = {
	root: null,
	threshold: 0,
	rootMargin: `-${headerHeight}px`,
};

const heroSectionObserver = new IntersectionObserver(function (entries, observer) {
	const [entry] = entries;
	if (!entry.isIntersecting) {
		header.classList.add('sticky');
		document.querySelector('.section-hero').style.marginTop = `${headerHeight}px`;
	} else {
		header.classList.remove('sticky');
		document.querySelector('.section-hero').style.marginTop = `0px`;
	}
}, options);

heroSectionObserver.observe(document.querySelector('.section-hero'));

/// PADDING TOP SCROLL
document.documentElement.style.setProperty('--scroll-padding', headerHeight + 'px');

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

const navBtn = document.querySelector('.nav__btn')
const navLinksBox = document.querySelector('.nav__links')
const footerSpan = document.querySelector('.footer__date')
const allLinksDesktop = document.querySelectorAll('.nav-desktop a')
const allLinksMobile = document.querySelectorAll('.nav-mobile a ')
const allSections = document.querySelectorAll('.section')
let map

const showLinks = () => {
	navLinksBox.classList.toggle('nav__links--active')
}

const actuallDate = () => {
	const year = new Date().getFullYear()
	footerSpan.textContent = year
}

const closeMobileNavigation = () => {
	allLinksMobile.forEach(link =>
		link.addEventListener('click', () => {
			navLinksBox.classList.remove('nav__links--active')
		})
	)
}

const scrollSpy = () => {
	allSections.forEach(section => {
		let currentLocation = window.scrollY
		let currentSection = section.offsetTop - 79
		let sectionHeight = section.offsetHeight
		let sectionId = section.getAttribute('id')

		if (currentLocation >= currentSection && currentLocation < currentSection + sectionHeight) {
			allLinksDesktop.forEach(link => {
				link.classList.remove('active')
				document.querySelector('.nav-desktop a[href*=' + sectionId + ']').classList.add('active')
			})
		}
	})
}

function initMap() {
	const mcdonald = { lat:50.08819447775574, lng: 19.89283320291136}
   
	const map = new google.maps.Map(document.getElementById('map'), {
		center: mcdonald,
		zoom: 19,
        mapTypeId: 'hybrid'
	})

	const marker = new google.maps.Marker({
		position: mcdonald,
		map: map,
	})
}
window.initMap = initMap

actuallDate()
closeMobileNavigation()
navBtn.addEventListener('click', showLinks)
window.addEventListener('scroll', scrollSpy)

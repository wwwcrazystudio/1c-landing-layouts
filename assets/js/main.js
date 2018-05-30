(function(){

function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const langsNav = document.querySelectorAll('#dropdown li');
if (langsNav.length)
	langsNav.forEach( (el, i) => {
		el.addEventListener('click', () => {

	  		let lang = document.querySelector('.dropbtn');
	  		lang.innerHTML = langsNav[i].textContent + ' ';
		})
	});

const scrollBtn = document.querySelector('.scroll-down');

if (scrollBtn)
	scrollBtn.addEventListener('click', () => {
		window.scroll({
		  top: 2300,
		  behavior: "smooth"
		});
	});

let slider = document.querySelector('.slider');

if (slider) {
	function printSlideIndex() {
		let bullets = document.querySelectorAll('.slider-bullets li');
		for (let i=0, len=bullets.length; i<len; i++) {
			bullets[i].className = '';
			bullets[i].innerHTML = `
					  <img src="assets/img/options/bullet-n.png"> `;
		}
		bullets[this.currentSlide].className = 'active';
		bullets[this.currentSlide].innerHTML = `
					  <img src="assets/img/options/bullet-a.png"> `;
	}


	const mySiema = new Siema({
	  onInit: printSlideIndex,
	  onChange: printSlideIndex,
	});

	const prev = document.querySelector('.prev');
	const next = document.querySelector('.next');
	const bullets = document.querySelectorAll('.slider-bullets li');

	bullets.forEach( (el, i) => {
		el.addEventListener('click', () => mySiema.goTo(i));
	});

	prev.addEventListener('click', () => mySiema.prev());
	next.addEventListener('click', () => mySiema.next());
}


let modal = document.getElementById('modal-window');
let btn = document.querySelectorAll('.btn.work-link');
let span = document.getElementsByClassName("close")[0];

if (btn.length)
	btn.forEach( (el, i) => {
		el.addEventListener('click', () => {

			event.preventDefault();
			event.stopPropagation();

			let imgs = document.querySelectorAll('#modal-window .work-pic img');
			imgs.forEach(img => img.style.display = "none");

			imgs[i].style.display = "block";
			imgs[i].style.margin = "auto";
			modal.style.display = "block";

			span.onclick = function() {
			    modal.style.display = "none";
			}	
			window.onclick = function(event) {

				let wrapper = document.querySelector('.modal-wrapper');

			    if (event.target == wrapper) {
			        modal.style.display = "none";
			    }
			}	
		})
	});

})();
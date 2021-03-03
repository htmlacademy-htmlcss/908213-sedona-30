let BlockFormHotelSearch = document.querySelector('.block-form-hotel-search');
let hotelSearchBtn = document.querySelector('.hotel-search-btn');
let FormHotelSearch = BlockFormHotelSearch.querySelector('.form-hotel-search');
let FormArrivalDate = FormHotelSearch.querySelector('[name=arrival-date]');
let FormDepartureDate = FormHotelSearch.querySelector('[name=departure-date]');
let FormArrivalDateGrownup = FormHotelSearch.querySelector('[name=arrival-date-grownup]');
let FormArrivalDateChildren = FormHotelSearch.querySelector('[name=arrival-date-children]');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('quantity_grownup');
  storage = localStorage.getItem('quantity_children');
} catch(err) {
  isStorageSupport = false;
}

hotelSearchBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	BlockFormHotelSearch.classList.toggle('modal-show');
	setTimeout(() => {FormArrivalDate.focus();}, 1500);
});

FormHotelSearch.addEventListener('submit', function(evt) {
  if (!FormArrivalDate || !FormDepartureDate || FormArrivalDateGrownup === 0) {
      evt.preventDefaut();
      FormHotelSearch.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('quantity_grownup', FormArrivalDateGrownup.value);
      localStorage.setItem('quantity_children', FormArrivalDateChildren.value);
    }
  }
});

if (!BlockFormHotelSearch.classList.contains('modal-show')) {
      FormHotelSearch.classList.remove('modal-error');
    }

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (BlockFormHotelSearch.classList.contains('modal-show')) {
      evt.preventDefault();
      BlockFormHotelSearch.classList.toggle('modal-show');
    }
  }
});

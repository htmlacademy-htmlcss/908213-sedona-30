let BlockFormHotelSearch = document.querySelector('.block-form-hotel-search');
let hotelSearchBtn = document.querySelector('.hotel-search-btn');
let FormHotelSearch = BlockFormHotelSearch.querySelector('.form-hotel-search');
let FormArrivalDate = FormHotelSearch.querySelector('[name=arrival-date]');
let FormDepartureDate = FormHotelSearch.querySelector('[name=departure-date]');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('Arrival_Date');
  storage = localStorage.getItem('Departure_Date');
} catch(err) {
  isStorageSupport = false;
}

hotelSearchBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	BlockFormHotelSearch.classList.toggle('modal-show');
	setTimeout(() => {FormArrivalDate.focus();

	if (storage) {
  	FormArrivalDate.value = storage;
  	FormDepartureDate.focus();
	} else {
  	 FormArrivalDate.focus();
	}
	}, 1500);
});

FormHotelSearch.addEventListener('submit', function(evt) {
  if (!FormArrivalDate || !FormDepartureDate) {
      evt.preventDefaut();
      FormHotelSearch.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('Arrival_Date', FormArrivalDate.value);
      localStorage.setItem('Departure_Date', FormDepartureDate.value);
    }
  }
});

if (!FormHotelSearch.classList.contains('modal-show')) {
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

window.onload = function () {


  let setupOpen = document.querySelector('.setup-open');
  let setup = document.querySelector('.setup');
  let close = document.querySelector('.setup-close');

  var onPopupEscPress = function(evt) {
    if(evt.keyCode === 27) {
      closePopup();
    }
  }


  let openPopup = function() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown',
      onPopupEscPress);
  }
  let closePopup = function() {
    setup.classList.add('hidden');
    document.addEventListener('keydown',
      onPopupEscPress);
  }



  setupOpen.addEventListener('click', function () {
    openPopup();

  });
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
   openPopup();
    }
  });


  close.addEventListener('click', function () {
   closePopup();

  });
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
closePopup();
    }
  });
  close.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 13){
  closePopup();
    }
  })

  let userNameInput = document.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function (evt) {

    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Ievadiet vismaz 4 burtus');

    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Nepārsniedziet 12 simbolus');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Ievadiet savu vārdu');
    }
  });





}

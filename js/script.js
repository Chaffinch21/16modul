let selector = document.querySelector('input[type="tel"]');

let im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.validForm__form', {
  rules:{
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    }
  }
})

const selectEl = document.querySelector('#selectCustom');
const choices = new Choices(selectEl, {
  searchEnabled: false,
  shouldSort: false,
  duplicateItemsAllowed: false,
  // itemSelectText : ''
})

ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
          center: [48.872185073737896,2.354223999999991],
          zoom: 17.2,
          controls: []
      });
      var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/geoMetka.svg',
        iconImageSize: [28, 40],
        //iconImageOffset: [-3, -42]
      });

      myMap.geoObjects.add(myPlacemark);
    }
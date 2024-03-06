ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [49.813056, 73.105861],
        zoom: 19
    });

    
    var customLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="myPlacemarkLayout">' +
            '<img src="$[properties.iconContent]" alt="Изображение">' +
            '<div>$[properties.balloonContent]</div>' +
        '</div>'
    );

    var placemark1 = new ymaps.Placemark([49.813092, 73.105773], {
        
        hintContent: 'Unit 40 - YAKIMA',
        balloonContent: '',
        iconContent: '../images/pizza.svg' 
    }, {
        
        iconLayout: customLayout,
        iconShape: {
            type: 'Rectangle',
            coordinates: [[-25, -25], [25, 25]]
        }
    });

    // Добавляем метку на карту
    myMap.geoObjects.add(placemark1);
}



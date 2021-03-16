/*----- constants -----*/

/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const $city = $('#city');
const $temp = $('#temp');
const $feel = $('#feel');
const $weather = $('#weather');
const $input = $('input[type=text]');

/*----- event listeners -----*/
$('form').on('submit', handleGetData);

/*----- functions -----*/
function handleGetData(evt) {
    evt.preventDefault();
    const userInput = $input.val();
    $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&APPID=5beacde19077b3b21b0f1838949b741f&units=imperial'
    }).then(
        (data) => {
            render(data);
        },
        // failure
        (error) => {
            console.log('error', error);
        }
    );
}

function render(data) {
    $city.text('City: ' + data.name);
    $temp.text('Temperature: ' + Math.round(data.main.temp)).append('&deg;' + ' F');
    $feel.text('Feels Like: ' + Math.round(data.main.feels_like)).append('&deg;' + ' F');
    $weather.text('Weather: ' + data.weather[0].description);
}

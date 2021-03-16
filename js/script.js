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
        url:'http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&APPID=5beacde19077b3b21b0f1838949b741f'
    }).then(
        (data) => {
            console.log('data', data);
            render(data);
        },
        // failure
        (error) => {
            console.log('error', error);
        }
    );
}

function render(data) {
    $city.text(data.name);
    // $temp.text(data.);
}
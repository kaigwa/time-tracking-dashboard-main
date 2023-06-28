const btnDaily = document.querySelector('#daily');
const btnWeekly = document.querySelector('#weekly');
const btnMonthly = document.querySelector('#monthly');
const currently = document.querySelectorAll('#now');
const previously = document.querySelectorAll('#before');
const subtopic = document.querySelectorAll('#subject');


// getting data from local json file;
// by using fetch method, .then() method to display them;
fetch('data.json')
    .then((response) => response.json())
    .then((data) => (outData = data));

    btnDaily.addEventListener('click',() => {
        // btnMonthly.classList.toggle('active');
        // btnWeekly.classList.toggle('active');
        // btnDaily.classList.toggle('.active');
        for (let i = 0; i <= 5; i++){
            subtopic[i].innerHTML = outData[i].title;
            currently[i].innerHTML = outData[i].timeframes.daily.current;
            previously[i].innerHTML = outData[i].timeframes.daily.previous;
        }
    })

    btnWeekly.addEventListener('click',() => {
        // btnMonthly.classList.toggle('active');
        // btnWeekly.classList.toggle('active');
        // btnDaily.classList.toggle('active');
        for (let i = 0; i <= 5; i++){
            subtopic[i].innerHTML = outData[i].title;
            currently[i].innerHTML = outData[i].timeframes.weekly.current;
            previously[i].innerHTML = outData[i].timeframes.weekly.previous;

        }
    })

    btnMonthly.addEventListener('click',() => {
        // btnMonthly.classList.toggle('active');
        // btnWeekly.classList.toggle('active');
        // btnDaily.classList.toggle('active');
        for (let i = 0; i <= 5; i++){
            subtopic[i].innerHTML = outData[i].title;
            currently[i].innerHTML = outData[i].timeframes.monthly.current;
            previously[i].innerHTML = outData[i].timeframes.monthly.previous;

        }
    })
// FlipClock

// var clock = $('.clock').FlipClock(3600 * 24 * 4, {
//     clockFace: 'DailyCounter',
//     defaultLanguage: 'russian'
// });

var clock = new FlipClock($('.js-timer'), {
    clockFace: 'DailyCounter',
    language: 'Russian'
});

var date = new Date();
clock.setTime((date.getHours() * 1660 * 60) + (date.getMinutes() * 60) + date.getSeconds());

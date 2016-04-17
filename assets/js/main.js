// FlipClock

var currentDate = new Date(),
    pastDate  = new Date('2016-04-12 11:02:12'),
    diff = currentDate.getTime() / 1000 - pastDate.getTime() / 1000;

clock = $('.js-timer').FlipClock(diff, {
    clockFace: 'DailyCounter',
    language: 'russian'
});

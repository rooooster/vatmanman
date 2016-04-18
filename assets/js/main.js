// FlipClock

var currentDate = new Date(),
    pastDate  = new Date('2016-04-12 11:02:12'),
    diff = (currentDate.getTime() - pastDate.getTime()) / 1000;

clock = $('.js-timer').FlipClock(diff, {
    clockFace: 'DailyCounter',
    language: 'russian'
});

// Click on svg

$(".youtube-link").on("click", function() {

    window.open('https://www.facebook.com/LuckyLabsCompany/videos/1673526512897392/','_blank');

});

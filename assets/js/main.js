// FlipClock

var currentDate = new Date(),
    pastDate  = new Date('2016-04-12T08:02:03.047Z'),
    diff = (currentDate.getTime() - pastDate.getTime()) / 1000;
console.log(pastDate);
console.log(currentDate);

clock = $('.js-timer').FlipClock(diff, {
    clockFace: 'DailyCounter',
    language: 'russian'
});

// Click on svg

$(".youtube-link").on("click", function() {

    window.open('https://www.facebook.com/LuckyLabsCompany/videos/1673526512897392/','_blank');

});


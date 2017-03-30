$(document).ready(function () {
    var buttons = $('button');
    var progressBars = $('div.progress-bar');


    buttons.on('click',function () {
        var barMaxWidth = $(this).data('width'),
            barColor = $(this).data('color'),
            barNumber = $(this).data('number'),
            progressBars = $('div#bar'+barNumber).find('span');

        progressBars.removeClass('blue').removeClass('orange').removeClass('blue').removeClass('green');
        progressBars.addClass(barColor).width(barMaxWidth).fadeIn(2000);
    })
});
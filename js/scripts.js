function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function (quoteData) {

            if (quoteData.quoteAuthor === '') {
                quoteData.quoteAuthor = 'Unknown';
            };

            $("#randomQuote").html("<p id='randomQuote'><i class=\"fa fa-quote-left\"></i> &nbsp; &nbsp;" + quoteData.quoteText + "<br/> <div class=\"text-right\"> &dash;" + quoteData.quoteAuthor + "</div></p>");
            $("#tweetMe").attr("href", "https://twitter.com/home/?status=" + quoteData.quoteText + ' - ' + quoteData.quoteAuthor);
        }
    });
}

function randomColor() {
    var colors = [
        '#34495e',
        '#6C7A89',
        '#ABB7B7',
        '#336E7B',
        '#8E44AD',
        '#674172',
        '#D2527F',
        '#96281B',
        '#34495e',
        '#16a085',
        '#f39c12',
        '#d35400',
        '#c0392b',
        '#7f8c8d',
        '#8e44ad'
    ];
    var choosedColor = colors[(Math.floor(Math.random() * 16))];
    return choosedColor;
}

$(function () {
    randomQuote();
    randomColor();
});

$("#newQuote").click(function () {
    $('body').css({'background': randomColor(), 'transition': 'all linear 0.2s'});
    randomQuote();
});

$(document).ready(function(){
    $('form').on('submit', search);
    function search(e) {
        e.preventDefault();
        var searchTerm = $('#search-term').val();
        $.ajax({
            url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&api-key=3QGZ7MMyfYXUsnhWkaEll7osnICLxAS9',
            method: "GET"
        }).then(function (response) {
            for(var i = 0; i < response.response.docs.length; i++){
                $('#article-holder').append('<p class="result">' + response.response.docs[i].headline.main + '</p>')
            }
        });
    }


});
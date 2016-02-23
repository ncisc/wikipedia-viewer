$(document).ready(function(){
  // send request
  var searchTerm;
  var apiUrl;
  // apiUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=' + searchTerm + '&gsrlimit=10&callback=?';
  // https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=3&exlimit=10&exintro=1&explaintext=1&gsrsearch=starcraft&gsrlimit=10

  $('#search').on('click', function(){
    // remove last results
    $('#results').empty();
    // send api request
    searchTerm = $('#textSearch').val();
    apiUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=' + searchTerm + '&gsrlimit=10&callback=?';
    $.getJSON(apiUrl, function(json){
      // eplore json file and show data on html
      $.each(json.query.pages, function(key, val){
        $('#results').append("<a class='link' href='http://en.wikipedia.org/?curid=" + val.pageid + "'><div class='result'><h3 class='title'>" + val.title + "</h3><div class='description'>" + val.extract + "</div></div></a>")
      });
    });
  });

  // api tool https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&prop=extracts&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=starcraft&gsrlimit=10
});

$(document).ready(function() {
  $('#searchButton').click(function(){
    //clean previous search when searching a new word
    $('#resultGroup').empty();
    //Grab search values entered on the input field
    var searchValue = $('#searchInput').val();
    //Ajax call for the search value above
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchValue +'&callback=?';
    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: 'json',
      success: function(data){
        for (var i = 0; i < data[1].length; i++){
          $('#resultGroup').append('<div class="finalResult">'+'<a href=' + data[3][i] + ' target="_blank">' + '<h4>' + data[1][i] + '</h4>' + '<p>' + data[2][i] + '</p></a></div>');

        }
      }
    });

  });

  //use Enter key for search
  $('#searchInput').bind('keypress', function(key){
    if(key.keyCode == 13){
      $('#searchButton').click();
    }
  })

  //refresh search field and results
  $('#refreshButton').click(function(){
    $('#resultGroup').empty();
    $('#searchInput').val('');

  });

});

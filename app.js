$( document ).ready(function() {

  $('#search-button').on('click', function(){
    var inputText = $('#search-box').val()

    $.post('https://en.wikipedia.org/w/api.php?action=query&generator=search&utf8=1&gsrsearch=' + inputText +'&prop=extracts&exsentences=2&exintro=1&exlimit=10&format=json&origin=*', function(data){
      var wikisObj = (data.query.pages)
      var ul = $('<ul/>')
      $.each(wikisObj, function(key, value) {

      ul.append('<li class=' + value.title + '><a href=https://en.wikipedia.org/?curid=' +  value.pageid + '>' + value.extract + '</li>' ) 
      
      })
      $('#wiki-box').html(ul)
    })    
  })
  $('form input').on('keypress', function(e) {
    return e.which !== 13;
  });
  
}) 

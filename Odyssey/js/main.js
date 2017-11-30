$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'hover'
    });

    var audioElement = document.getElementById('audio1');
          $('#stop').hide();

          $('#play').click(function() {
          $('#play').hide();
          $('#stop').show();
           audioElement.play();
      });

      $('#stop').click(function() {
          $('#play').show();
          $('#stop').hide();
          audioElement.pause();
      });
});

$(document).ready(function() {
    $('.burger-button').on('click', function(){
      var w = $('.content-wrap').width(),
          h = $('.content-wrap').height() + 1,
          pT = '0,0 '+w+',0 0,'+ h,
          pB = w+',0 '+ w+','+ h+' 0,'+h;
      
      $(this).toggleClass('active')
        .parents('.content-wrap')
        .toggleClass('active');
      
      $('#top,#bottom').css({
        'width': w + 'px',
        'height': h + 'px'
      });
      $('#top polygon').attr('points', pT);
      $('#bottom polygon').attr('points', pB);
    });
});
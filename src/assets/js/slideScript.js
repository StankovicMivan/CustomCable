$(document).ready(function(){
  
    $("input[type='range']").change(function() {
      slider = $(this);
      value = (slider.val() -1);
      
      $('p.rangeLabel').removeClass('selected');
      $('p.rangeLabel:eq(' + value + ')').addClass('selected');
    
    });
  
    $('p.rangeLabel').bind('click', function(){
      label = $(this);
      value = label.index();
      $("input[type='range']").attr('value', value)
                              .trigger('change');
    });
   
  });
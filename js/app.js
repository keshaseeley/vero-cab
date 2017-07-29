// General
$(document).ready(function() {
  // on click in nav, toggle class="hidden"
  $('#navItem1').click(function(event){
      event.preventDefault();
      $('#item1').removeClass('hidden');
      $('#item2').addClass('hidden');
      $('#item3').addClass('hidden');
  })
  $('#navItem2').click(function(event){
      event.preventDefault();
      $('#item2').removeClass('hidden');
      $('#item3').addClass('hidden');
      $('#item1').addClass('hidden');
  })
  $('#navItem3').click(function(event){
      event.preventDefault();
      $('#item3').removeClass('hidden');
      $('#item1').addClass('hidden');
      $('#item2').addClass('hidden');
  })
})

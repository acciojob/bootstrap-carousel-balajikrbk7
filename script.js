<!-- Your HTML code for the carousel goes here -->

<!-- Link your Bootstrap JS file (must be placed after your HTML code) -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script>
$(document).ready(function(){
  // Activate the carousel
  $("#myCarousel").carousel();
  
  // Enable carousel controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});
</script>

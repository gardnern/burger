// $(document).ready(function() {
  $(function() {
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
      
      $.ajax({
        method: "PUT",
        url: "/api/burger/" + burger
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
    
    });
});


const table = $('#workTable');
const modalBtn = $('#modalBtn');
const submit = $('#submit');

getResults();

table.append(`
<tr>
<td>do</td>
<td>re</td>
<td>me</td>
</tr>
`);

function getResults() {
  table.val('');
  fetch("/api/workouts")
      .then(function(response) {
          if (response.status !== 200) {
              console.log("Looks like there was a problem. Status Code: " + response.status);
              return;
          }
          response.json().then(function(data) {
              console.log(data)
          });
      })
      .catch(function(err) {
          console.log("Fetch Error :-S", err);
      });
}

submit.on(events, function () {
  
});

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/workouts/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newWorkout = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/workouts", {
      type: "POST",
      data: newWorkout
    }).then(
      function() {
        console.log("created new workout");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

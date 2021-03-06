const table = $('#workTable');
const modalBtn = $('#modalBtn');
const submit = $('#submit');
const newFit = $('#newFit');
const workoutReps = $('#workoutReps');

getResults();

function getResults() {
  table.val('');
  fetch("/api/workouts")
      .then(function(response) {
          if (response.status !== 200) {
              console.log("Looks like there was a problem. Status Code: " + response.status);
              return;
          }
          response.json().then(function(data) {
            data.forEach(work => {
              table.append(`
              <tr>
              <td>${work.fit}</td>
              <td>${work.reps}</td>
              </tr>
              `);
            });
          });
      })
      .catch(function(err) {
          console.log("Fetch Error :-S", err);
      });
}
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  submit.click(function (e) {
    e.preventDefault();
    const fit = newFit.val();
    const reps = workoutReps.val();
    fetch("/api/workouts", {
      method: "post",
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          fit,
          reps
      })
  })
  .then(function(response) {
    console.log(response)
      location.reload();
      return response.json();
  })
  });
});

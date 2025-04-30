document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', function () {
      menu.classList.toggle('active');
      this.classList.toggle('is-active'); // Optional: Add an active state to the hamburger icon
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
        hamburger.classList.remove('is-active'); // Optional: Reset hamburger icon state
      }
    });
  }
});

//dashboard

var ctx = document.getElementById('patientChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Patient Records',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }]
    }
});
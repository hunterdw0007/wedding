// Set the date we're counting down to (April 5, 2025 5:00 PM EST)
const weddingDate = new Date("April 5, 2025 17:00:00 EST").getTime();

// Update the countdown every 1 second
const countdown = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the time difference between now and the wedding date
  const timeLeft = weddingDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the results
  document.querySelector(".countdown__days .count").textContent = String(
    days
  ).padStart(2, "0");
  document.querySelector(".countdown__hours .count").textContent = String(
    hours
  ).padStart(2, "0");
  document.querySelector(".countdown__minutes .count").textContent = String(
    minutes
  ).padStart(2, "0");
  document.querySelector(".countdown__seconds .count").textContent = String(
    seconds
  ).padStart(2, "0");

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown__title").textContent =
      "The Wedding Ceremony Has Begun!";
    document.querySelector(".countdown__block").style.display = "none";
  }
}, 1000);

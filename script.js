document.addEventListener("DOMContentLoaded", (event) => {
  // Set the end date to 8 days from now
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 8);

  function updateCountdown() {
    const now = new Date();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
      Array.from(document.getElementsByClassName("days")).forEach((element) => {
        element.textContent = "00";
      });
      Array.from(document.getElementsByClassName("hours")).forEach(
        (element) => {
          element.textContent = "00";
        }
      );
      Array.from(document.getElementsByClassName("minutes")).forEach(
        (element) => {
          element.textContent = "00";
        }
      );
      Array.from(document.getElementsByClassName("seconds")).forEach(
        (element) => {
          element.textContent = "00";
        }
      );
      clearInterval(timer);
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // document.getElementById("days").textContent = String(days).padStart(2, "0");
    Array.from(document.getElementsByClassName("days")).forEach((element) => {
      element.textContent = String(days).padStart(2, "0");
    });
    Array.from(document.getElementsByClassName("hours")).forEach((element) => {
      element.textContent = String(hours).padStart(2, "0");
    });
    Array.from(document.getElementsByClassName("minutes")).forEach(
      (element) => {
        element.textContent = String(minutes).padStart(2, "0");
      }
    );
    Array.from(document.getElementsByClassName("seconds")).forEach(
      (element) => {
        element.textContent = String(seconds).padStart(2, "0");
      }
    );
  }

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
});

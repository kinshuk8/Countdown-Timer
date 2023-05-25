var countdownTime;
    var countdown;

    function startCountdown() {
      clearInterval(countdown);
      countdownTime = document.getElementById("countdownTime").value;
      if (countdownTime && countdownTime > 0) {
        var startTime = new Date().getTime();
        countdown = setInterval(function() {
          var currentTime = new Date().getTime();
          var elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
          var remainingSeconds = countdownTime - elapsedSeconds;
          document.getElementById("countdown").innerHTML = remainingSeconds + "s ";
          if (remainingSeconds <= 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = "Countdown expired";
          }
        }, 1000);
      }
    }
  
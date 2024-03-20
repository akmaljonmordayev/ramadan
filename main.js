const targetDate = new Date("2024-03-26T23:59:59").getTime();
const countdown = setInterval(function () {
  const currentDate = new Date().getTime();
  const remainingTime = targetDate - currentDate;
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  console.log(
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
  );
  if (remainingTime < 0) {
    clearInterval(countdown);
    console.log("Countdown finished!");
  }
}, 1000);




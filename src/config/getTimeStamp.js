export const timeSince = (timeStamp) => {
  var now = new Date(),
    secondsPast = (now.getTime() - timeStamp) / 1000;
  if (secondsPast < 60) {
    return parseInt(secondsPast) + 's ago';
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + 'm ago';
  }
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + 'h ago';
  }
  if (secondsPast > 86400) {
    var day = new Date(timeStamp).getDate();
    var month = new Date(timeStamp).toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
    var year = new Date(timeStamp).getFullYear() == now.getFullYear() ? "" : " " + 
    new Date(timeStamp).getFullYear();
    return day + " " + month + year;
  }
}

// const currentTimeStamp = new Date().getTime();
// const currentTimeStamp = '1659377138217';

// console.log(timeSince(currentTimeStamp));
// console.log(currentTimeStamp);

// node src/getDate.js
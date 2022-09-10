function timeSince(timeStamp){
    var now = new Date(),
      secondsPast = (now.getTime() - timeStamp) / 1000;
    if (secondsPast < 60) {
      return parseInt(secondsPast) + 's';
    }
    if (secondsPast < 3600) {
      return parseInt(secondsPast / 60) + 'm';
    }
    if (secondsPast <= 86400) {
      return parseInt(secondsPast / 3600) + 'h';
    }
    if (secondsPast > 86400) {
      day = new Date(timeStamp).getDate();
      month = new Date(timeStamp).toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
      year =  new Date(timeStamp).getFullYear() == now.getFullYear() ? "" : " " + 
      new Date(timeStamp).getFullYear();
      return day + " " + month + year;
    }
  }


  
//   const currentTimeStamp = '1659377138217';
// const currentTimeStamp = new Date(parseInt('1659377138217'));
//   const currentTimeStamp = new Date().getTime();

// console.log(timeSince(currentTimeStamp));

const today = new Date();

console.log(today.toISOString()); 



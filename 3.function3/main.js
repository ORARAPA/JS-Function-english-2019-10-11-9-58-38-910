function alphabetSort(message){
  message = message.split('');
  for (var i=0;i<=message.length;i++){
    for (var j=1;j<(message.length-i);j++){
      console.log('j-1: ' + message[j-1]);
      console.log('j: ' + message[j]);
      console.log(message[j-1] > message[j]);
      if(message[j-1] > message[j]){
        var tmp = message[j];
        message[j] = message[j-1];
        console.log(message[j]);
        message[j-1] = tmp;
        console.log(message);
      }
    }
  }
  return console.log(message.join(''));
}
alphabetSort('hello'); // should return 'ehllo'
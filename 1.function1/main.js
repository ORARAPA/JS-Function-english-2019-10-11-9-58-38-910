function reverseString(message){
  var reversedMessage = "";
  for(var i=message.length-1; i>=0; i--){
    reversedMessage = reversedMessage + message[i];
  }

  return console.log(reversedMessage);
}
reverseString('hello'); // should return 'olleh'
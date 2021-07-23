function palindrome(message){
  if(reverseString(message) == message){
    return console.log(true);  
  }else{
    return console.log(false);
  }

}

function reverseString(message){
  var reversedMessage = "";
  for(var i=message.length-1; i>=0; i--){
    reversedMessage = reversedMessage + message[i];
  }

  return reversedMessage;
}
reverseString('hello'); // should return 'olleh'

palindrome('hello'); // should return false
palindrome('abcba'); // should return true
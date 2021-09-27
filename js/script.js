
function generatePassword(){
  document.getElementById("copy").innerText = "copy";
  var password = '';
  
let countNumber = parseInt(document.getElementById("number").value) ;                //get the number of numbers
let countLetter = parseInt(document.getElementById("letter").value);                // get the number of letters
let countCharacter = parseInt(document.getElementById("character").value);          // get the number of character

if(isNaN(countNumber)){
  countNumber = 0;
}
if(isNaN(countLetter)){
  countLetter = 0;
}
if(isNaN(countCharacter)){
  countCharacter = 0;
}


let sizeOfPass = (countNumber) + (countCharacter) + (countLetter);                  // calculating total length of the password

let rNumber = '0123456789';                                                         // set of numbers
let rLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';               // set of letters
let rCharacter = '#@&';                                                             // set of characters



// console.log(countNumber);

for(let i = 0 ; i<countNumber;i++){
    let index = parseInt(Math.random()*10);                                         // Get random number between [0, 10]
    password+= rNumber.charAt(index);                                               
}

for(let i = 0 ; i<countLetter;i++){
    let index = parseInt(Math.random()*52);                                         // Get random number between [0, 52]
    password+= rLetter.charAt(index);
}

for(let i = 0 ; i<countCharacter;i++){
    let index = parseInt(Math.random()*3)                                           // Get random number between [0, 3]
    password+= rCharacter.charAt(index);
}

// ============================================

    let arr = password.split('');                                                   // Convert String to array
                                              
    
    for(let i=0 ; i<sizeOfPass ; ++i) {
      let j = parseInt(Math.random() * sizeOfPass);                                 // Get random of [0, size of the password]
      
      let temp = arr[i];                                                           // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    password = arr.join('');     
                                                      // Convert Array to string
    if(password!=''){
    document.getElementById("circle").style.display = 'block';
    document.getElementById("copy").style.display = "block";
    document.getElementById('password').style.display ="block";
    document.getElementById('password').innerText = password;                      // display password in html page 
    }
                                             
  // console.log(password);

}

function copyPassword(){
  
  var copyText = document.getElementById("password");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  document.getElementById("copy").innerText = "copied!";
  
}

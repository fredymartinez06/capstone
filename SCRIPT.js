let submitButton = document.querySelector(".submit");
const zodiacList = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"]; 
let resultText = document.querySelector("#result");
let monthInput = document.querySelector(".month");
let dayInput = document.querySelector(".day");
let day = 0;
let month;

submitButton.onclick=function(){
  
  month = monthInput.value.toLowerCase();
  day = dayInput.value;
  console.log(month);
  console.log(day);
  findZodiacSign();
}; 



function findZodiacSign() { 


  if ((month == 'march' && day >= 21) || (month == 'april' && day <= 19)) { 
    console.log("aries");
    resultText.innerHTML = "<a href='aries.html'>"+"You are an Aries"+"</a>"; 
  }
}
/*
else if((monthInput === 'april' && day >= 20) || (month === 'may' && day <= 20)) { return "You are a Taurus"; } 
else if ((monthInput === 'may' && day >= 21) || (month === 'june' && day <= 20)) { return "You are a Gemini"; } 
else if ((monthInput === 'june'&& day >= 21) || (month === 'july' && day <= 22)) { return "You are a Cancer"; } 
else if ((monthInput === 'july' && day >= 23) || (month === 'august' && day <= 22)) { return "You are a Leo"; } 
else if ((monthInput === 'august' && day >= 23) || (month === 'september' && day <= 22)) { return "You are a Virgo"; } else if ((month === 'september' && day >= 23) || (month === 'october' && day <= 22)) { return "You are a Libra"; } 
else if ((monthInput=== 'october' && day >= 23) || (month === 'november' && day <= 21)) { return "You are a Scorpio"; } 
else if ((monthInput === 'november' && day >= 22) || (month === 'december' && day <= 21)) { return "You are a Sagittarius"; } 
else if ((monthInput === 'december' && day >= 22) || (month === 'january' && day <= 19)) { return "You are a Capricorn"; } else if ((month === 'january' && day >= 20) || (month === 'february' && day <= 18)) { return "You are an Aquarius"; }
else if ((monthInput === 'february' && day >= 19) || (month === 'march' && day <= 20)) { return "You are a Pisces"; } 
else { return "Please check and make sure your spelling is correct :("; 
     } 
}*/

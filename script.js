//explanation of rules
let score = 0; 
let checkLetter = "";
let countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
	,"Yemen","Zambia","Zimbabwe"];
//Comment
playGame();

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function playGame() {
	
	if(score == 0) {
		alert("The game Atlas starts off by the, the player choosing a country (if in country mode), or a state (in state mode), this country will always start with the letter 'A' then the computer will choose a country that starts with the last letter of the country the player choose, "); 
		alert("ex. the player chooses Afghanistan, and then the computer will choose a country that will start with the letter 'N' such as nigeria and the games continue")
		alert("Ready to play?");
		checkLetter = "A";
	}
	playerCountry = prompt("Please enter a country that starts with "+checkLetter+": ");
	if(playerCountry != undefined || playerCountry != null) {
		playerCountry = playerCountry.trim().toUpperCase();
		if(playerCountry.charAt(0).toUpperCase() == checkLetter.toUpperCase() && isValidCountry(countryList,playerCountry).isValid) {
			checkLetter = playerCountry.charAt(playerCountry.length-1).toUpperCase();
			countryList.splice(isValidCountry(countryList,playerCountry).indexFoundAt,1);
			alert("Correct! My turn.");
			
			let possibleCountries = getListOfCountryWithLetter(checkLetter,countryList);
			let randomNum = Math.floor(Math.random()*possibleCountries.length);
			let computerResponse = possibleCountries[randomNum];
			if(computerResponse != null || computerResponse != undefined) {
				alert("I choose " + computerResponse + ".");
				countryList.splice(countryList.indexOf(computerResponse),1);
				checkLetter = computerResponse.trim().charAt(computerResponse.length-1).toUpperCase();
				score++;
				playGame();
			}else{	
				alert("It seems that I have now lost this game, congraguations for beating the computer.");
			}
			
		}else{
			if((playerCountry.charAt(0).toUpperCase() != checkLetter.toUpperCase())) {
				alert("That starts with the wrong letter!");
			}
			if(!isValidCountry(countryList,playerCountry).isValid) {
				alert("That isn't a country left in the game!");
			}
			
		}
	}else{
		alert("Not a real input.");
	}
	

}  
function getListOfCountryWithLetter(letter, countries) {
	let list = [];
	for (var i = 0; i < countries.length; i++) {
	  if (countries[i].trim().charAt(0).toUpperCase() ==  letter.toUpperCase()) {
		list.push(countries[i]);
	  }
	}
	return list;
  }
function isValidCountry(countries, checkCountry) {
	let validCountry = {
		isValid: false,
		indexFoundAt: -1
	};
	for(var i =0;i<countries.length;i++) {
		if((countries[i].toUpperCase().trim() == checkCountry)) {
			validCountry.isValid = true;
			validCountry.indexFoundAt = i;
		}
	}
	return validCountry;
}

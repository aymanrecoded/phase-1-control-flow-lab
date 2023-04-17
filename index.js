function scuberGreetingForFeet(feet) {
  let result;

  if (feet <= 400) {
    result = "This one is on me!";
  } else if (feet > 400 && feet <= 2000) {
    result = "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    result = "I will gladly take your thirty bucks.";
  } else {
    result = "No can do.";
  }

  return result;
}


function ternaryCheckCity(city) {
  // Write your code here!
  const zoom = city === "NYC" ? ("Ok, sounds good.") : ("No go.");
  return zoom;
}

function switchOnCharmFromTip(response) {
  // Write your code here!
  let responseType;
  switch (response) {
    case 'generous':
      responseType = "Thank you so much."
      break;
    case 'not as generous':
      responseType = "Thank you."
      break;
    default:
      responseType = "Bye."
      break;
  }
  return responseType
}

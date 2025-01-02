// Generate prefix of name
function genPrefix(firstName) {
  if (firstName.length > 4) {
    return "Mighty";
  } else {
    return "Fearless";
  }
}

// Generate First Name of name (pirate-themed)
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  switch (firstLetter) {
    case "a":
      return "Edward";
      break;
    case "b":
      return "Bartholomew";
      break;
    case "c":
      return "William";
      break;
    case "d":
      return "Henry";
      break;
    case "e":
      return "Samuel";
      break;
    case "f":
      return "Charles";
      break;
    case "g":
      return "Calico";
      break;
    case "h":
      return "James";
      break;
    case "i":
      return "Thomas";
      break;
    case "j":
      return "John";
      break;
    case "k":
      return "Benjamin";
      break;
    case "l":
      return "Robert";
      break;
    case "m":
      return "Marshall";
      break;
    case "n":
      return "Steve";
      break;
    case "o":
      return "David";
      break;
    case "p":
      return "Francis";
      break;
    case "q":
      return "Louis";
      break;
    case "r":
      return "Richard";
      break;
    case "s":
      return "Nicolas";
      break;
    case "t":
      return "Joseph";
      break;
    case "u":
      return "George";
      break;
    case "v":
      return "Jean";
      break;
    case "w":
      return "Thomas";
      break;
    case "x":
      return "Nathaiel";
      break;
    case "y":
      return "Alexander";
      break;
    case "z":
      return "Martin";
      break;
    default:
      return "Jack"; // Default
      break;
  }
}


// Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
  let secondWord = favoriteColor.split(" ");
  if (secondWord[1] == "") {
    secondWord = favoriteColor;
  } else {
    secondWord = secondWord[1];
  }
  if (roadType === "road" && favoriteColor.length < 7) {
    return `${favoriteColor}stone`;
  } else if (roadType === "street" && favoriteColor.length < 7) {
    return `${favoriteColor}beard`;
  } else if (roadType === "avenue" && favoriteColor.length < 7) {
    return `${favoriteColor}sails`;
  } else if (roadType === "court" && favoriteColor.length < 7) {
    return `${favoriteColor}wave`;
  } else if (roadType === "road" && favoriteColor.length > 7) {
    return `${secondWord}heart`;
  } else if (roadType === "street" && favoriteColor.length > 7) {
    return `${secondWord}cove`;
  } else if (roadType === "avuene" && favoriteColor.length > 7) {
    return `${secondWord}storm`;
  } else if (roadType === "court" && favoriteColor.length > 7) {
    return `${secondWord}hunter`;
  } else {
    return `${favoriteColor}raven`; //Default
  }
}

// Generate Last Name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();

  if (lastLetter === "j" || lastLetter === "n") {
    return "Vice-Captain";
  } else if (lastLetter === "f" || lastLetter === "p") {
    return "Quartermaster";
  } else if (lastLetter === "e" || lastLetter === "t") {
    return "Bosun";
  } else if (lastLetter === "s" || lastLetter === "r") {
    return "Navigator";
  } else if (lastLetter === "h" || lastLetter === "x") {
    return "Sniper";
  } else if (lastLetter === "l" || lastLetter === "y") {
    return "Shipwright";
  } else if (lastLetter === "k" || lastLetter === "w") {
    return "Doctor";
  } else if (lastLetter === "g" || lastLetter === "o") {
    return "Cook";
  } else if (lastLetter === "m" || lastLetter === "b") {
    return "Deckhand";
  } else if (lastLetter === "v" || lastLetter === "u") {
    return "Lookout";
  } else if (lastLetter === "c" || lastLetter === "z") {
    return "Cabin Boy";
  } else {
    return "Captain"; // Default
  }
}


// Generate Suffix
function genSuffix(favoriteAnimal) {
  return `of the ${favoriteAnimal} Pirates`;
}

// Master Function to Assemble Full Name
function genFullName() {
  // Define Variable from Inputs
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const roadType = document.getElementById("roadType").value;
  const favoriteColor = document.getElementById("favoriteColor").value.trim();
  const favoriteAnimal = document.getElementById("favoriteAnimal").value.trim();

  // Generate each part of the name using Helper functions
  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const middleName = genMiddleName(roadType, favoriteColor);
  const newLastName = genLastName(lastName);
  const suffix = genSuffix(favoriteAnimal);

  //functions to capitalize words
  const capitalizePrefix = capitalize(prefix);
  const capitalizeFirstName = capitalize(newFirstName);
  const capitalizeMiddleName = capitalize(middleName);
  const capitalizLastName = capitalize(newLastName);

  // Combine all parts into the final name
  const fullName = ` ${capitalizePrefix} ${capitalizeFirstName} ${capitalizeMiddleName} ${capitalizLastName} ${suffix}`;

  //Display the result
  document.getElementById("result").textContent = fullName;
}

//Capitalizer function

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

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
    case "b":
      return "Bartholomew";
    case "c":
      return "William";
    case "d":
      return "Henry";
    case "e":
      return "Samuel";
    case "f":
      return "Charles";
    case "g":
      return "Calico";
    case "h":
      return "James";
    case "i":
      return "Thomas";
    case "j":
      return "John";
    case "k":
      return "Benjamin";
    case "l":
      return "Robert";
    case "m":
      return "Marshall";
    case "n":
      return "Steve";
    case "o":
      return "David";
    case "p":
      return "Francis";
    case "q":
      return "Louis";
    case "r":
      return "Richard";
    case "s":
      return "Nicolas";
    case "t":
      return "Joseph";
    case "u":
      return "George";
    case "v":
      return "Jean";
    case "w":
      return "Thomas";
    case "x":
      return "Nathaiel";
    case "y":
      return "Alexander";
    case "z":
      return "Martin";
    default:
      return "Jack"; // Default
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
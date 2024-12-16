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
  if (firstLetter === "a") {
    return "Edward";
  } else if (firstLetter === "b") {
    return "Bartholomew";
  } else if (firstLetter === "c") {
    return "William";
  } else if (firstLetter === "d") {
    return "Henry";
  } else if (firstLetter === "e") {
    return "Samuel";
  } else if (firstLetter === "f") {
    return "Charles";
  } else if (firstLetter === "g") {
    return "Calico";
  } else if (firstLetter === "h") {
    return "James";
  } else if (firstLetter === "i") {
    return "Thomas";
  } else if (firstLetter === "j") {
    return "John";
  } else if (firstLetter === "k") {
    return "Benjamin";
  } else if (firstLetter === "l") {
    return "Robert";
  } else if (firstLetter === "m") {
    return "Jack";
  } else if (firstLetter === "n") {
    return "Steve";
  } else if (firstLetter === "o") {
    return "David";
  } else if (firstLetter === "p") {
    return "Francis";
  } else if (firstLetter === "q") {
    return "Louis";
  } else if (firstLetter === "r") {
    return "Richard";
  } else if (firstLetter === "s") {
    return "Nicolas";
  } else if (firstLetter === "t") {
    return "Joseph";
  } else if (firstLetter === "u") {
    return "George";
  } else if (firstLetter === "v") {
    return "Jean";
  } else if (firstLetter === "w") {
    return "Thomas";
  } else if (firstLetter === "x") {
    return "Nathaiel";
  } else if (firstLetter === "y") {
    return "Alexander";
  } else if (firstLetter === "z") {
    return "Martin";
  } else {
    return "Jack"; // Default name
  }
}

// Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
  if (roadType === "road") {
    return `${favoriteColor}beard`;
  } else if (roadType === "street") {
    return `${favoriteColor}heart`;
  } else if (roadType === "avenue") {
    return `${favoriteColor}wave`;
  } else {
    return `${favoriteColor}storm`;
  }
}

// Generate Last Name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "j") {
    return "First Mate";
  } else if (lastLetter === "f") {
    return "Quartermaster";
  } else if (lastLetter === "e") {
    return "Bosun";
  } else if (lastLetter === "s") {
    return "Navigator";
  } else if (lastLetter === "h") {
    return "Sniper";
  } else if (lastLetter === "l") {
    return "Shipwright";
  } else if (lastLetter === "k") {
    return "Doctor";
  } else if (lastLetter === "g") {
    return "Cook";
  } else if (lastLetter === "m") {
    return "Deckhand";
  } else if (lastLetter === "v") {
    return "Lookout";
  } else if (lastLetter === "c") {
    return "Cabin Boy";
  } else {
    return "Captain"; // Default name
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

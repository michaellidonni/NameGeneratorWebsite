// Generate prefix of name
function genPrefix(firstName) {
  if (firstName.length > 4) {
    return "The Great";
  } else {
    return "Master";
  }
}

// Generate First Name of name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  if (firstLetter === "a") {
    return "Jeff";
  } else if (firstLetter === "b") {
    return "Joe";
  } else if (firstLetter === "c") {
    return "Chris";
  } else if (firstLetter === "d") {
    return "Dana";
  } else {
    return "Alex"; // Default name if the first letter doesn't match
  }
}

// Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
  if (roadType === "road") {
    return `${favoriteColor}ridge`; // IE: Redridge
  } else if (roadType === "street") {
    return `${favoriteColor}son`; // IE: Blueson
  } else if (roadType === "aveune") {
    return `${favoriteColor}field`; // IE: Bluefield
  } else {
    return `${favoriteColor}stone`; // IE: Bluestone
  }
}

// Generate Last Name
function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a") {
    return "Shadow";
  } else if (lastLetter === "e") {
    return "Storm";
  } else if (lastLetter === "i") {
    return "Blaze";
  } else if (lastLetter === "o") {
    return "Thorn";
  } else if (lastLetter === "u") {
    return "Frost";
  } else {
    return "Moon"; // Default last name for letters not matched
  }
}

// Generate Suffix
function genSuffix(favoriteAnimal) {
  reutrn`of the ${favoriteAnimal}`;
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
}

// bad_code.js

const API_KEY = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"; // Hardcoded secret (Stripe API key)

function exampleFunction() {
  console.log("This is an example function");
  var x = 42; // Unused variable (Linting issue: 'x' is assigned a value but never used)
  console.log("Using the API key:", API_KEY);
} exampleFunction()  // Linting issue: Missing semicolon, Bad formatting

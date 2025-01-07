// Function to validate phone number
function validatePhoneNumber(phoneNumber) {
    // Regex pattern to match valid US phone numbers
    const validPhonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  
    if (validPhonePattern.test(phoneNumber)) {
      return true;
    }
    return false;
  }
  
  // Function to format and check phone number
  function checkPhoneNumber() {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');
    
    // Clear previous result
    resultsDiv.innerHTML = '';
  
    // Check if input is empty
    if (userInput === '') {
      alert('Please provide a phone number');
      return;
    }
    
    // Validate phone number
    if (validatePhoneNumber(userInput)) {
      resultsDiv.innerHTML = `Valid US number: ${userInput}`;
    } else {
      resultsDiv.innerHTML = `Invalid US number: ${userInput}`;
    }
  }
  
  // Clear the results div
  function clearResults() {
    document.getElementById('results-div').innerHTML = '';
  }
  
  // Event listeners for buttons
  document.getElementById('check-btn').addEventListener('click', checkPhoneNumber);
  document.getElementById('clear-btn').addEventListener('click', clearResults);
  
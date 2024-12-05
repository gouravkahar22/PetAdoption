function displayCard() {
    // Get user input
    const fullName = document.getElementById('fullName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const address = document.getElementById('address').value;
    const gmail = document.getElementById('gmail').value;

    // Validate inputs
    if (fullName === '' || mobileNumber === '' || address === '' || gmail === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Display card with user input
    document.getElementById('displayName').textContent = fullName;
    document.getElementById('displayMobile').textContent = mobileNumber;
    document.getElementById('displayAddress').textContent = address;
    document.getElementById('displayGmail').textContent = gmail;

    // Show the card
    document.getElementById('userCard').style.display = 'block';
  }

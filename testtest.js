function submitForm() {
    const userForm = document.getElementById('userForm');
    const addressForm = document.getElementById('addressForm');
  
    // Check if all required fields are filled
    if (!userForm.checkValidity() || !addressForm.checkValidity()) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Create arrays to store form data
    const userFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'gender'];
    const addressFields = ['address1', 'address2', 'city', 'state', 'zip'];
  
    // Populate user information array
    const userInfo = [];
    for (let i = 0; i < userFields.length; i++) {
      userInfo.push(userForm.elements[userFields[i]].value);
    }
  
    // Populate address information array
    const addressInfo = [];
    for (let i = 0; i < addressFields.length; i++) {
      addressInfo.push(addressForm.elements[addressFields[i]].value);
    }
  
    // Combine user and address information into a single object
    const combinedInfo = {};
    for (let i = 0; i < userFields.length; i++) {
      combinedInfo[userFields[i]] = userInfo[i];
    }
    for (let i = 0; i < addressFields.length; i++) {
      combinedInfo[addressFields[i]] = addressInfo[i];
    }
  
    console.log('User Information:', combinedInfo);
    alert('Form submitted successfully!');
  }
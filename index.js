function submitForm() {
    const userForm = document.getElementById('userForm');
    const addressForm = document.getElementById('addressForm');

    // Check if all required fields are filled
    if (userForm.checkValidity() && addressForm.checkValidity()) {
        const userFormData = new FormData(userForm);
        const addressFormData = new FormData(addressForm);

        const userInfo = {
            firstName: userFormData.get('firstName'),
            lastName: userFormData.get('lastName'),
            email: userFormData.get('email'),
            phoneNumber: userFormData.get('phoneNumber'),
            gender: userFormData.get('gender'),
            address1: addressFormData.get('address1'),
            address2: addressFormData.get('address2'), // Optional field
            city: addressFormData.get('city'),
            state: addressFormData.get('state'),
            zip: addressFormData.get('zip')
        };

        console.log('User Information:', userInfo);
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all required fields.');
    }
}

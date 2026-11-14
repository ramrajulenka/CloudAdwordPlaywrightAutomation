export const testData = {
    validRegistrationData: {
        name: "John Doe",
        email: "john.doe@example.com",
        contactNumber: "1234567890",
        verifyValidationMessage: "Registration successful",
        countryCode: "+91"
    },
    invalidRegistrationData: {
        name: "",
        email: "invalid-email",
        contactNumber: "12345",
        invalidValidationMessageWithoutName: "Please enter name",
        invalidValidationMessageWithoutEmail: "Please enter email",
        invalidValidationMessageWithoutContactNumber: "Please enter contact no",
        invalidValidationMessageWithInvalidEmail: "Please enter correct",
        invalidValidationMessageWithInvalidContactNumber: "Please enter correct contact no"
    
    },
};
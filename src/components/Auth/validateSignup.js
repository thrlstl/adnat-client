export default function validateSignup(values) {
    let errors = {};
  
    // Validate Name - required
    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate Email - required, valid email address
    if (!values.email_address) {
      errors.email_address = 'Email address required';
    } else if (!/\S+@\S+\.\S+/.test(values.email_address)) {
      errors.email_address = 'Email address is invalid';
    }

    // Validate Password - required, 6 characters or more
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    // Validate Password Confirmation - required, matches password
    if (!values.passwordConfirmation) {
      errors.passwordConfirmation = 'Password is required';
    } else if (values.passwordConfirmation !== values.password) {
      errors.passwordConfirmation = 'Passwords do not match';
    }
    
    return errors;
  }
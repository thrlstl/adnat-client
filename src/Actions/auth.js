export const loginSuccess = user => {
    return {
        type: 'LOGIN_SUCCESS',
        user: user
    }
}

export const signupSuccess = user => {
    return {
      type: 'SIGNUP_SUCCESS',
      user: user
    }
  }
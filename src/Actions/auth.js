export const loginSuccess = ({user, token}) => {
    return {
        type: 'LOGIN_SUCCESS',
        user: user,
        token: token
    }
}

export const signupSuccess = ({user, token}) => {
    return {
      type: 'SIGNUP_SUCCESS',
      user: user,
      token: token
    }
}

export const updateAuthentication = value => {
  return {
    type: 'UPDATE_AUTHENTICATION',
    isAuthenticated: value
  }
}
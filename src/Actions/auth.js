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

export const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS',
    user: {}
  }
}

export const updateAuthentication = isAuthenticated => {
  return {
    type: 'UPDATE_AUTHENTICATION',
    isAuthenticated: isAuthenticated
  }
}
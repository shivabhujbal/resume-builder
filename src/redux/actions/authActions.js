// Action for logging in
export const loginSuccess = (userId, email) => ({
    type: 'LOGIN_SUCCESS',
    payload: { userId, email },
  });
  
  // Action for logging out
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
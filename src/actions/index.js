export const getBooks = () => ({
  type: 'GET_BOOKS',
});

export const handleAuth = (username, password) => ({
  type: 'AUTH_REQUEST',
  payload: { username, password }
});
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'GET_BOOKS':
        return { ...state, loading: true };
    case 'BOOKS_RECEIVED':
      return {
        ...state,
        books: action.books,
        loading: false
      };
    default:
      return state;
  }
}


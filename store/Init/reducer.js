export const initReducer = (state = false, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS_RECIEVE':
        console.log('action')
      return state = true;
    default:
      return state;
  }
};

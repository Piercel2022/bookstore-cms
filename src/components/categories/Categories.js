const CHECK_STATUS = 'bookstore/categories/CHECK';

const initialState = [];

const checkReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default checkReducer;

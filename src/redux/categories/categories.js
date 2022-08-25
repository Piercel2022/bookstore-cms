const addcategory = 'bookstore/categories/ADD_CATEGORY';

const UnderConstruction = 'Under_Construction';
const initialState = [];

// eslint-disable-next-line default-param-last
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case addcategory:
      return action.text;
    default: return state;
  }
};

export const addCategory = () => ({
  type: addcategory,
  text: UnderConstruction,
});

export default categoriesReducer;

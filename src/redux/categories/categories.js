const CHECK_STATUS = 'CHECK_STATUS';

export const categoryStatus = () => ({ type: CHECK_STATUS });

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'PAGE UNDER CONSTRUCTION';

    default:
      return state;
  }
};

export default categoryReducer;

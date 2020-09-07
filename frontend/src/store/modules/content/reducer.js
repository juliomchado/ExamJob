const INITIAL_STATE = {
  items: [],
};

const content = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EDIT_ARTICLE': {
      const { content } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            content
          }
        ]
      }
    }
    default: {
      return state;
    }
  }

}

export default content;

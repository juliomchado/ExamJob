import produce from 'immer';

const INITIAL_STATE = {
  items: [],
};

const content = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  switch (action.type) {
    case 'LOAD_ARTICLE': {
      const { articles } = action.payload;

      draft.items.push({
        articles,
      });

      break;
    }
    case 'USER_LOGIN': {
      const { id } = action.payload;

      draft.items.push({
        id,
      });
      break;
    }
    default: {
      return draft;
    }
  }
});

export default content;

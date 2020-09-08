const LoadArticle = (articles) => ({
  type: 'LOAD_ARTICLE',
  payload: {
    articles,
  },
});

const UserLogin = (id) => ({
  type: 'USER_LOGIN',
  payload: {
    id,
  },
});

export {
  LoadArticle,
  UserLogin,
};

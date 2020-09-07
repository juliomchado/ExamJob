export default function EditArticle(content) {
  return {
    type: 'EDIT_ARTICLE',
    payload: {
      content
    },
  };
}

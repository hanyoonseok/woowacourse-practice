export const $ = id => document.getElementById(id);

export const createElement = ({tag, id, innerHTML}) => {
  const htmlTag = document.createElement(tag);
  if (id) htmlTag.id = id;
  if (innerHTML) htmlTag.innerHTML = innerHTML;

  return htmlTag;
};

export const makeElement = ({ tag = 'div', innerHTML, id, type, placeholder }) => {
  const htmlTag = document.createElement(tag);
  if (innerHTML) htmlTag.innerHTML = innerHTML;
  if (id) htmlTag.id = id;
  if (type) htmlTag.type = type;
  if (placeholder) htmlTag.placeholder = placeholder;

  return htmlTag;
};

export const $ = id => document.getElementById(id);

export const appendChilds = (parent, childs) => {
  childs.forEach(child => parent.appendChild(child));
};

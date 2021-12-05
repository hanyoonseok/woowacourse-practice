export const makeElement = ({ tag = 'div', innerHTML, id, type, placeholder, className }) => {
  const htmlTag = document.createElement(tag);
  if (innerHTML) htmlTag.innerHTML = innerHTML;
  if (id) htmlTag.id = id;
  if (type) htmlTag.type = type;
  if (placeholder) htmlTag.placeholder = placeholder;
  if (className) htmlTag.classList = className;

  return htmlTag;
};

export const $ = id => document.getElementById(id);

export const appendChilds = (parent, childs) => {
  childs.forEach(child => parent.appendChild(child));
};

export const clearContents = container => {
  container.textContent = '';
};

export const getAllData = name => {
  return JSON.parse(localStorage.getItem(name));
};

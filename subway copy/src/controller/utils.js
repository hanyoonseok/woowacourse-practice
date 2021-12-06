export const $ = id => document.getElementById(id);

export const createElement = ({ tag, innerHTML, id, className, type, placeholder, name }) => {
  const htmlTag = document.createElement(tag);
  if (innerHTML) htmlTag.innerHTML = innerHTML;
  if (id) htmlTag.id = id;
  if (className) htmlTag.classList = className;
  if (type) htmlTag.type = type;
  if (placeholder) htmlTag.placeholder = placeholder;
  if(name) htmlTag.name = name;

  return htmlTag;
};

export const appendChilds = (parent, childs) => childs.forEach(child => parent.appendChild(child));

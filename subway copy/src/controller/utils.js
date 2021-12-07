export const $ = id => document.getElementById(id);

export const createElement = ({ tag, innerHTML, id, className, type, placeholder, name, border }) => {
  const htmlTag = document.createElement(tag);
  if (innerHTML) htmlTag.innerHTML = innerHTML;
  if (id) htmlTag.id = id;
  if (className) htmlTag.classList = className;
  if (type) htmlTag.type = type;
  if (placeholder) htmlTag.placeholder = placeholder;
  if(name) htmlTag.name = name;
  if(border) htmlTag.border =1;

  return htmlTag;
};

export const appendChilds = (parent, childs) => childs.forEach(child => parent.appendChild(child));

export const getAllData = key => JSON.parse(localStorage.getItem(key)) || [];

export const setAllData = (allData, key) => localStorage.setItem(key, JSON.stringify(allData));
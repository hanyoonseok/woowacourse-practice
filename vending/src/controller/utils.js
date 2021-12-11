export const $ = id => document.getElementById(id);

export const appendChilds = (parent, childs) => childs.forEach(child => parent.appendChild(child))
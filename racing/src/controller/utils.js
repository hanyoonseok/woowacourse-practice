export const $ = id => document.getElementById(id);

export const createElement = (tag, id='', innerHTML='') =>{
    const htmlTag = document.createElement(tag);
    htmlTag.innerHTML = innerHTML;
    htmlTag.id = id;

    return htmlTag;
}
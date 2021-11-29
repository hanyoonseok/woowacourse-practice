export const myCreateElement = (tag, text) => {
    const htmlTag = document.createElement(tag);
    htmlTag.innerHTML = text;
  
    return htmlTag;
  };
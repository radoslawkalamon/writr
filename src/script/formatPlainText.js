/**
 * Returns formated HTML Text Editor ready
 * @param {String}
 * @returns {String}
 */

export default (_text) => {
  return `<div>${_text.replace(/\n/g, '<br></div><div>')}</div>`;
};

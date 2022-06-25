export const excerpt = (str, count) => {
  if (str.length > count) {
    str = str.substring(0, count) + " ... ";
  }
  return str;
};

export const sentenceCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

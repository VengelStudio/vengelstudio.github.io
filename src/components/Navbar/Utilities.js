export const getClassNameWithSize = (classToApply, state) => {
  classToApply += state ? " downsize" : "";
  return classToApply;
};

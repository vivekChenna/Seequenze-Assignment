export const generateUniqueId = () => {
  const prefix = "id_";
  const randomPart = Math.random().toString(36).substr(2, 9);
  return prefix + randomPart;
};


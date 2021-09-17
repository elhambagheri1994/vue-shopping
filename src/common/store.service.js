export const getData = name => {
  return JSON.parse(window.localStorage.getItem(name));
};

export const saveData = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data));
};

export default { getData, saveData };

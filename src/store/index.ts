export const getLocal = (key: string) => {
  try {
    const storeData = localStorage.getItem(key);
    if (!storeData) return undefined;
    return JSON.parse(storeData);
  } catch (error) {
    console.log(error);
  }
};
export const setLocal = (key: string, data: object[] | string) => {
  try {
    const setData = JSON.stringify(data);
    return localStorage.setItem(key, setData);
  } catch (error) {
    console.log(error);
  }
};

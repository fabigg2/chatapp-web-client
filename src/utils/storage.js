export const saveItemInStorage = (key, data)=>localStorage.setItem(key, JSON.stringify(data));
export const getItemFromStorage= (key)=>JSON.parse(localStorage.getItem(key));
export const removeItemFromStorage= (key)=>localStorage.removeItem(key);
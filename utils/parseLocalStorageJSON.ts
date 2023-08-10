const parseJSONFromLocalStorage = (key: string) => {
  if (typeof window === 'undefined') {
    return null; 
  }

  const str = localStorage.getItem(key)
  if (!str) return null;

  try {
    return JSON.parse(str);
  } catch (e) {
    localStorage.removeItem(key);
    return null;
  }
}

export default parseJSONFromLocalStorage;
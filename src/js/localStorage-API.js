export function addDataToLocalStorage(key, value) {
  try {
    const normalizeText = JSON.stringify(value);
    localStorage.setItem(key, normalizeText);
  } catch (error) {
    console.log('error', error.message);
  }
}

export function getDataToLocalStorage(key) {
  try {
    const normalizeText = localStorage.getItem(key);
    return normalizeText === null ? undefined : JSON.parse(normalizeText);
  } catch (error) {
    console.log('error', error.message);
  }
}

export function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('error', error.message);
  }
}

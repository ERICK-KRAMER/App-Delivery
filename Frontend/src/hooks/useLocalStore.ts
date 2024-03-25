interface ILocalStorage {
  key: string,
  value: string | number | object | boolean | null
}

export class UseLocalstorage {

  setItemOnLocalStorage({ key, value }: ILocalStorage): void {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (Array.isArray(parsedData)) {
        parsedData.push(value);
        localStorage.setItem(key, JSON.stringify(parsedData));
      } else {
        const newDataArray = [parsedData, value];
        localStorage.setItem(key, JSON.stringify(newDataArray));
      }
    } else {
      localStorage.setItem(key, JSON.stringify([value]));
    }
  }

  getItemFromLocalStorage(key: string) {
    const item = localStorage.getItem(key);
    if (item) return JSON.parse(item);
    return null;
  }

  removeItemFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  clearAllItemsInLocalStorage() {
    localStorage.clear();
  }

}
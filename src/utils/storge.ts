type LocalStorgeKeyType = 'school' | 'gradeClass';
type SessionStorgeKeyType = '';

export const localStorgeSetItem = (key: LocalStorgeKeyType, value: any) => {
  localStorage.setItem(
    key,
    typeof value === 'string' ? value : JSON.stringify(value)
  );
};

export const localStorgeGetItem = (key: LocalStorgeKeyType) => {
  return JSON.parse(localStorage.getItem(key));
};

export const localStorgeRemoveItem = (key: LocalStorgeKeyType) => {
  localStorage.removeItem(key);
};

export const localStorgeClear = () => {
  localStorage.clear();
};

export const sessionStorageSetItem = (
  key: SessionStorgeKeyType,
  value: string
) => {
  sessionStorage.setItem(key, value);
};

export const sessionStorageGetItem = (key: SessionStorgeKeyType) => {
  return sessionStorage.getItem(key);
};

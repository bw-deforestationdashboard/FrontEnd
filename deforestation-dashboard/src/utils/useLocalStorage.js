import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => { //pass callback for useState
    const item = window.localStorage.getItem(key); //search for existing key in localStorage
    return item ? JSON.parse(item) : initialValue; //if item is defined, return item stringified, or the initialValue
  });

  //we don't want to use setStoredValue - we need a function that was implement the localStorage bit 
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
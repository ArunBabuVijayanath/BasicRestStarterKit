export function setName(name) {
  return {
    type: "SET_NAME",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 2000);
    })
  };
}

export function setAge(age) {
  return dispatchEvent => {
    setTimeout(() => {
      dispatchEvent({
        type: "SET_AGE",
        payload: age
      });
    }, 2000);
  };
}

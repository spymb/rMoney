let id = parseInt(window.localStorage.getItem('idMax') || '0');

const createID = ():number => {
  id += 1;
  window.localStorage.setItem('idMax', JSON.stringify(id))
  return id;
};

export {createID};
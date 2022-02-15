let id = 0;
const createID = ():number => {
  id += 1;
  return id;
};

export {createID};
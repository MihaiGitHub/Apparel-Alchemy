// export const createAction = (type, payload) => ({ type, payload });
export const createAction = (type, payload) => {
  console.log("create action");
  return { type, payload };
};

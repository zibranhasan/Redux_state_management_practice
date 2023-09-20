import { Middleware } from "@reduxjs/toolkit";

export const logger: Middleware = (store) => (next) => (action) => {
  console.log("next state", store.getState());

  next(action);
};

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { campersReducer } from "./campers/slice";

export const store = configeStore({
  reducer: {
    campers: campersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    detDefaultMiddleware({
      serializabkeCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

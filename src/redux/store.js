import { configureStore } from "@reduxjs/toolkit";
import bazarReducer from "./features/bazarSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisconfig = {
  key: "root",
  storage,
};

const persisedReducer = persistReducer(persisconfig, bazarReducer);

export const store = configureStore({
  reducer: {
    bazaar: persisedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);

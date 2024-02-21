import { configureStore } from "@reduxjs/toolkit"
import MenuSlice from "./MenuSlice";
const store = configureStore({
    reducer: {
        menu : MenuSlice,
    }
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({

// })

// export default store;
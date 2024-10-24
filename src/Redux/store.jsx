import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './bookSlice'

export const bookStore=configureStore({
    reducer:{
        bookReducer:bookSlice
    }
})


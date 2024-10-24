import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: 'bookmanager',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    updateBook:(state,action)=>{

const{id,title,author}=action.payload;
const uu=state.books.find(book=>book.id==id)
if(uu){
    uu.title=title,
    uu.author=author
}
    },
    
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;

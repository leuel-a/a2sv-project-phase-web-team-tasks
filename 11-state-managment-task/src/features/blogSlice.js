import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogs: [],
  loading: false,
  error: null
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {}
});

export default blogSlice.reducer;
export const {} = blogSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: []
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    editNote: (state, action) => {
      const { id, updatedNote } = action.payload;
      const noteIndex = state.notes.findIndex(note => note.id === id);
      if (noteIndex !== -1) {
        state.notes[noteIndex] = { ...state.notes[noteIndex], ...updatedNote };
      }
    },
    deleteNote: (state, action) => {
      const noteId = action.payload;
      state.notes = state.notes.filter(note => note.id !== noteId);
    }
  },
})

export const { addNote, editNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar redux', 'Estudar Zustand'],
  // Reducers => Ações que o usuário pode fazer
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo);
    },
  },
});

export const store = configureStore({
  //Reducer: Informações que serão compartilhadas na aplicação
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

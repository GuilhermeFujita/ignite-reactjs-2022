import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { player } from './slices/player';

export const store = configureStore({
  //Reducer: Informações que serão compartilhadas na aplicação
  reducer: {
    player,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

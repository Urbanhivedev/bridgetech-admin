import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProjects = createAsyncThunk(
  'candidateApp/candidates/getProjects',
  async () => {
    const response = await axios.get('/api/project-dashboard-app/projects');
    return response.data;
  }
);

const candidateAdaptar = createEntityAdapter({});

export const {
  selectAll: selectProjects,
  selectEntities: selectProjectsEntities,
  selectById: selectProjectById,
} = candidateAdaptar.getSelectors((state) => state.candidateApp.candidates);

const candidatesSlice = createSlice({
  name: 'candidateApp/candidates',
  initialState: candidateAdaptar.getInitialState(),
  reducers: {},
  extraReducers: {
    [getProjects.fulfilled]: candidateAdaptar.setAll,
  },
});

export default candidatesSlice.reducer;

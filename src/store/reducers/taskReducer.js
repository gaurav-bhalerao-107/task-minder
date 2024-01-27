import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: []
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchAllTasks: (state) => {
      state.tasks = JSON.parse(localStorage.getItem('task-minder'));
      console.log("state.tasks... ", state.tasks);
    }
  },
})

export const { fetchAllTasks } = taskSlice.actions

export default taskSlice.reducer
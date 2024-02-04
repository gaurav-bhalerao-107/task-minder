import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  projects: [],
  projectTasks: {
    "project": {},
    "tasks": []
  },
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchAllTasks: (state) => {
      state.tasks = JSON.parse(localStorage.getItem('task-minder'));
      console.log("state.tasks... ", state.tasks);
    },

    fetchAllProjects: (state) => {
      state.projects = JSON.parse(localStorage.getItem('task-minder-projects'));
      console.log("state.projects... ", state.projects);
    },

    fetchProjectTasks: (state, action) => {
      const { id } = action.payload;
      let project = JSON.parse(localStorage.getItem('task-minder-projects'))?.filter((item) => { return item.id == id })
      let tasks = JSON.parse(localStorage.getItem('task-minder'))?.filter((item) => { return item.project.id == id })
      state.projectTasks = { "project": project.length > 0 ? project[0] : {}, "tasks": tasks }
      console.log("state.projectTasks... ", state.projectTasks);
    }
  },
})

export const { fetchAllTasks, fetchAllProjects, fetchProjectTasks } = taskSlice.actions

export default taskSlice.reducer
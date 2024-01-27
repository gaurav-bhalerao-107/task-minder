import React, { useState } from 'react'

const TaskSlider = ({ type, openTaskSlider, setOpenTaskSlider, payload }) => {
  const { task_title, task_description, collaborators, status, project, priority } = payload;
  
  // title & description
  const [title, setTitle] = useState(task_title);
  const [description, setDescription] = useState(task_description);

  // tasks
  const [openTaskDropdown, setOpenTaskDropdown] = useState(false);
  const [selectedTaskStatus, setSelectedTaskStatus] = useState(status);
  const taskStatusList = [
    {
      "id": "todo",
      "label": "To Do"
    },
    {
      "id": "in-progress",
      "label": "In Progress"
    },
    {
      "id": "done",
      "label": "Done"
    }
  ];

  // projects
  const [openProjectDropdown, setOpenProjectDropdown] = useState(false);
  const [selectedProject, setSelectedProject] = useState(project);
  const projectsList = [
    {
      "id": "xsonic-media",
      "label": "Xsonic Media"
    },
    {
      "id": "expenzee",
      "label": "Expenzee"
    },
    {
      "id": "sunroof-energy",
      "label": "Sunroof Energy"
    }
  ];

  // priority
  const [selectedPriority, setSelectedPriority] = useState(priority);

  // selectedCollaborators
  const [openCollaboratorsDropdown, setOpenCollaboratorsDropdown] = useState(false);
  const [selectedCollaborators, setSelectedCollaborators] = useState(collaborators);
  const allcollaborators = [
    {
      "id": "gaurav-bhalerao",
      "name": "Gaurav Bhalerao",
      "username": "@gaurav",
      "image": "",
    },
    {
      "id": "john-doe",
      "name": "John Doe",
      "username": "@john",
      "image": "",
    },
    {
      "id": "warran-wade",
      "name": "Warran Wade",
      "username": "@warran",
      "image": "",
    },
  ];
  
  // select task status and close the dropdown
  const selectTaskStatus = (status) => {
    setSelectedTaskStatus(status);
    setOpenTaskDropdown(false);
  }

  // select project and close the dropdown
  const selectProject = (project) => {
    setSelectedProject(project);
    setOpenProjectDropdown(false);
  }

  // select project and close the dropdown
  const selectCollaborators = (collaborator) => {
    let selectedIds = selectedCollaborators.map(({ id }) => id)
    
    if(selectedIds.includes(collaborator.id)){
      let newResult = selectedCollaborators.filter(obj => obj.id !== collaborator.id);
      setSelectedCollaborators(newResult);
    } else {
      setSelectedCollaborators([...selectedCollaborators, collaborator])
    }
  }

  const getTaskStatusIcon = (status) => {
    if(status == "todo"){
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M5 3.9375C4.71821 3.9375 4.44796 4.04944 4.2487 4.2487C4.04944 4.44796 3.9375 4.71821 3.9375 5V19C3.9375 19.2818 4.04944 19.552 4.2487 19.7513C4.44796 19.9506 4.71821 20.0625 5 20.0625H19C19.2818 20.0625 19.552 19.9506 19.7513 19.7513C19.9506 19.552 20.0625 19.2818 20.0625 19V5C20.0625 4.71821 19.9506 4.44796 19.7513 4.2487C19.552 4.04944 19.2818 3.9375 19 3.9375H5ZM2.92287 2.92287C3.47376 2.37199 4.22093 2.0625 5 2.0625H19C19.7791 2.0625 20.5262 2.37199 21.0771 2.92287C21.628 3.47376 21.9375 4.22093 21.9375 5V19C21.9375 19.7791 21.628 20.5262 21.0771 21.0771C20.5262 21.628 19.7791 21.9375 19 21.9375H5C4.22093 21.9375 3.47376 21.628 2.92287 21.0771C2.37199 20.5262 2.0625 19.7791 2.0625 19V5C2.0625 4.22093 2.37199 3.47376 2.92287 2.92287Z" fill="#14367B"/>
        </svg>
      )
    } else if(status == "in-progress") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.75 7C5.75 6.58579 6.08579 6.25 6.5 6.25H17.5C17.9142 6.25 18.25 6.58579 18.25 7C18.25 7.41421 17.9142 7.75 17.5 7.75H6.5C6.08579 7.75 5.75 7.41421 5.75 7Z" fill="#8F4F00"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M5.75 17C5.75 16.5858 6.08579 16.25 6.5 16.25H17.5C17.9142 16.25 18.25 16.5858 18.25 17C18.25 17.4142 17.9142 17.75 17.5 17.75H6.5C6.08579 17.75 5.75 17.4142 5.75 17Z" fill="#8F4F00"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 12.75C10.6076 12.75 9.27226 13.3031 8.28769 14.2877C7.30312 15.2723 6.75 16.6076 6.75 18V20C6.75 20.0663 6.77634 20.1299 6.82322 20.1768C6.87011 20.2237 6.93369 20.25 7 20.25H17C17.0663 20.25 17.1299 20.2237 17.1768 20.1768C17.2237 20.1299 17.25 20.0663 17.25 20V18C17.25 16.6076 16.6969 15.2723 15.7123 14.2877C14.7277 13.3031 13.3924 12.75 12 12.75ZM7.22703 13.227C8.4929 11.9612 10.2098 11.25 12 11.25C13.7902 11.25 15.5071 11.9612 16.773 13.227C18.0388 14.4929 18.75 16.2098 18.75 18V20C18.75 20.4641 18.5656 20.9092 18.2374 21.2374C17.9092 21.5656 17.4641 21.75 17 21.75H7C6.53587 21.75 6.09075 21.5656 5.76256 21.2374C5.43437 20.9092 5.25 20.4641 5.25 20V18C5.25 16.2098 5.96116 14.4929 7.22703 13.227Z" fill="#8F4F00"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M5.76256 2.76256C6.09075 2.43437 6.53587 2.25 7 2.25H17C17.4641 2.25 17.9092 2.43437 18.2374 2.76256C18.5656 3.09075 18.75 3.53587 18.75 4V6C18.75 7.79021 18.0388 9.5071 16.773 10.773C15.5071 12.0388 13.7902 12.75 12 12.75C10.2098 12.75 8.4929 12.0388 7.22703 10.773C5.96116 9.5071 5.25 7.79021 5.25 6V4C5.25 3.53587 5.43437 3.09075 5.76256 2.76256ZM7 3.75C6.9337 3.75 6.87011 3.77634 6.82322 3.82322C6.77634 3.87011 6.75 3.9337 6.75 4V6C6.75 7.39239 7.30312 8.72774 8.28769 9.71231C9.27226 10.6969 10.6076 11.25 12 11.25C13.3924 11.25 14.7277 10.6969 15.7123 9.71231C16.6969 8.72774 17.25 7.39239 17.25 6V4C17.25 3.93369 17.2237 3.87011 17.1768 3.82322C17.1299 3.77634 17.0663 3.75 17 3.75H7Z" fill="#8F4F00"/>
        </svg>
      )
    } else if(status == "done") {
      return (
        <svg xmlns="http://www.w3.org/2000/svg"className='h-6 w-6' viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M5 3.75C4.66848 3.75 4.35054 3.8817 4.11612 4.11612C3.8817 4.35054 3.75 4.66848 3.75 5V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H19C19.3315 20.25 19.6495 20.1183 19.8839 19.8839C20.1183 19.6495 20.25 19.3315 20.25 19V5C20.25 4.66848 20.1183 4.35054 19.8839 4.11612C19.6495 3.8817 19.3315 3.75 19 3.75H5ZM3.05546 3.05546C3.57118 2.53973 4.27065 2.25 5 2.25H19C19.7293 2.25 20.4288 2.53973 20.9445 3.05546C21.4603 3.57118 21.75 4.27065 21.75 5V19C21.75 19.7293 21.4603 20.4288 20.9445 20.9445C20.4288 21.4603 19.7293 21.75 19 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V5C2.25 4.27065 2.53973 3.57118 3.05546 3.05546Z" fill="#81290E"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M15.5303 9.46967C15.8232 9.76256 15.8232 10.2374 15.5303 10.5303L11.5303 14.5303C11.2374 14.8232 10.7626 14.8232 10.4697 14.5303L8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697C8.76256 11.1768 9.23744 11.1768 9.53033 11.4697L11 12.9393L14.4697 9.46967C14.7626 9.17678 15.2374 9.17678 15.5303 9.46967Z" fill="#81290E"/>
        </svg>
      )
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M5 3.9375C4.71821 3.9375 4.44796 4.04944 4.2487 4.2487C4.04944 4.44796 3.9375 4.71821 3.9375 5V19C3.9375 19.2818 4.04944 19.552 4.2487 19.7513C4.44796 19.9506 4.71821 20.0625 5 20.0625H19C19.2818 20.0625 19.552 19.9506 19.7513 19.7513C19.9506 19.552 20.0625 19.2818 20.0625 19V5C20.0625 4.71821 19.9506 4.44796 19.7513 4.2487C19.552 4.04944 19.2818 3.9375 19 3.9375H5ZM2.92287 2.92287C3.47376 2.37199 4.22093 2.0625 5 2.0625H19C19.7791 2.0625 20.5262 2.37199 21.0771 2.92287C21.628 3.47376 21.9375 4.22093 21.9375 5V19C21.9375 19.7791 21.628 20.5262 21.0771 21.0771C20.5262 21.628 19.7791 21.9375 19 21.9375H5C4.22093 21.9375 3.47376 21.628 2.92287 21.0771C2.37199 20.5262 2.0625 19.7791 2.0625 19V5C2.0625 4.22093 2.37199 3.47376 2.92287 2.92287Z" fill="#14367B"/>
        </svg>
      )
    }
  }

  const generateRandomId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const segments = [];

    for (let i = 0; i < 3; i++) {
      let segment = '';
      for (let j = 0; j < 4; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        segment += characters.charAt(randomIndex);
      }
      segments.push(segment);
    }

    return segments.join('-');
  }

  const saveTask = () => {
    let id = generateRandomId()
    let payload = {
      "id": id,
      "title": title,
      "description": description,
      "collaborators": selectedCollaborators,
      "status": selectedTaskStatus,
      "project": selectedProject,
      "priority": selectedPriority
    }

    const items = JSON.parse(localStorage.getItem('task-minder'));
    let result = items ? [...items, payload] : [payload]
    localStorage.setItem('task-minder', JSON.stringify(result));
    setOpenTaskSlider(false);
  }

  const openEditSlider = () => {
    
  }

  const editTask = () => {

  }
  
  if(!openTaskSlider){
    return (
      <></>
    )
  }
  
  return (<>
    <div className="">
      <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className={openTaskSlider ? 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' : ''}></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pt-20 hide_scroll pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <div className={`pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 ${openTaskSlider ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                  <div className="h-0 flex-1 overflow-y-auto">
                    <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-base font-semibold leading-6 text-white capitalize" id="slide-over-title">{type} TASK</h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button onClick={() => setOpenTaskSlider(false)} type="button" className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                            <span className="absolute -inset-2.5"></span>
                            <span className="sr-only">Close panel</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-indigo-300">Get started by filling in the information below to create your new task.</p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="divide-y divide-gray-200 px-4 sm:px-6">
                        <div className="space-y-6 pb-5 pt-6">
                          {/* title */}
                          <div className="">
                            <label htmlFor="task-name" className="block text-sm font-medium leading-6 text-gray-900">Task</label>
                            <div className="mt-2">
                              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="task-name" id="task-name" placeholder="Task Name" className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                          </div>
                          {/* description */}
                          <div className="">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                            <div className="mt-2">
                              <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" name="description" placeholder="Description" rows="4" className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                          </div>
                          {/* assigned to */}
                          <div className="">
                            <h3 className="text-sm font-medium leading-6 text-gray-900">Team Members</h3>
                            <div className="mt-2">
                              <div className="relative flex space-x-2">
                                {
                                  selectedCollaborators.map((item, index) => {
                                    return (
                                      <a key={index} href="#" className="relative rounded-full hover:opacity-75">
                                        <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Tom Cook" />
                                      </a>

                                    )
                                  })
                                }
                                <button onClick={() => setOpenCollaboratorsDropdown(!openCollaboratorsDropdown)} type="button" className="relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                  {/* <span className="absolute -inset-2"></span> */}
                                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                  </svg>
                                </button>
                                {
                                  openCollaboratorsDropdown &&
                                  <ul className={`absolute z-10 mt-9 max-w-[385px] w-full max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${openCollaboratorsDropdown ? '' : 'transition ease-in duration-100 opacity-0'}`} tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                                    {
                                      allcollaborators.map((item, index) => {
                                        return(
                                          <li onClick={() => selectCollaborators(item)} className="cursor-pointer text-gray-900 relative select-none py-2 pl-3 pr-9" key={`listbox-option-${index}`} id={`listbox-option-${index}`} role="option">
                                            <div className="flex items-center">
                                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">{ item.name.slice(0,1) }</span>
                                              {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                              <span className={`${selectedCollaborators.map(({ id }) => id).includes(item.id) ? 'font-semibold' : 'font-normal'} ml-3 block truncate`}>{item.name}</span>
                                            </div>
                                            {
                                              selectedCollaborators.map(({ id }) => id).includes(item.id) &&
                                              <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                </svg>
                                              </span>
                                            }
                                          </li>
                                        )
                                      })
                                    }
                                  </ul>
                                }
                              </div>
                            </div>
                          </div>
                          {/* task status */}
                          <div className="">
                            <div>
                              <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">Task Status</label>
                              <div className="relative mt-2">
                                <button onClick={() => setOpenTaskDropdown(!openTaskDropdown)} type="button" className="cursor-pointer relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                  <span className="flex items-center">
                                  { getTaskStatusIcon(selectedTaskStatus.id) }
                                    <span className="ml-3 block truncate">{selectedTaskStatus.label}</span>
                                  </span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                                    </svg>
                                  </span>
                                </button>
                                {
                                  openTaskDropdown &&
                                  <ul className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${openTaskDropdown ? '' : 'transition ease-in duration-100 opacity-0'}`} tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                                    {
                                      taskStatusList.map((item, index) => {
                                        return(
                                          <li onClick={() => selectTaskStatus(item)} className="cursor-pointer text-gray-900 relative select-none py-2 pl-3 pr-9" key={`listbox-option-${index}`} id={`listbox-option-${index}`} role="option">
                                            <div className="flex items-center">
                                              { getTaskStatusIcon(item.id) }
                                                {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                                <span className={`${selectedTaskStatus.id == item.id ? 'font-semibold' : 'font-normal'} ml-3 block truncate`}>{item.label}</span>
                                            </div>
                                            {
                                              selectedTaskStatus.id == item.id &&
                                              <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                </svg>
                                              </span>
                                            }
                                          </li>
                                        )
                                      })
                                    }
                                  </ul>
                                }
                              </div>
                            </div>
                          </div>
                          {/* project */}
                          <div className="">
                            <div>
                              <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">Project</label>
                              <div className="relative mt-2">
                                <button onClick={() => setOpenProjectDropdown(!openProjectDropdown)} type="button" className="cursor-pointer relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                  <span className="flex items-center">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">{ selectedProject?.label?.slice(0,1) || "" }</span>
                                    <span className="ml-3 block truncate">{selectedProject.label}</span>
                                  </span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                      <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                                    </svg>
                                  </span>
                                </button>
                                {
                                  openProjectDropdown &&
                                  <ul className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${openProjectDropdown ? '' : 'transition ease-in duration-100 opacity-0'}`} tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                                    {
                                      projectsList.map((item, index) => {
                                        return(
                                          <li onClick={() => selectProject(item)} className="cursor-pointer text-gray-900 relative select-none py-2 pl-3 pr-9" key={`listbox-option-${index}`} id={`listbox-option-${index}`} role="option">
                                            <div className="flex items-center">
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">{ item.label.slice(0,1) }</span>
                                                {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                                <span className={`${selectedProject.id == item.id ? 'font-semibold' : 'font-normal'} ml-3 block truncate`}>{item.label}</span>
                                            </div>
                                            {
                                              selectedProject.id == item.id &&
                                              <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                </svg>
                                              </span>
                                            }
                                          </li>
                                        )
                                      })
                                    }
                                  </ul>
                                }
                              </div>
                            </div>
                          </div>
                          {/* priority */}
                          <div className="">
                            <h3 className="text-sm font-medium leading-6 text-gray-900">Priority</h3>
                            <div className="mt-2">
                              <div className="flex space-x-3">
                              <button onClick={() => setSelectedPriority("low")} type="button" className={`rounded px-5 py-2 ${ selectedPriority == "low" ? 'ring-indigo-600 ring-2' : 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50' } px-2 py-1 text-sm font-semibold shadow-sm ring-1 ring-inset`}>
                                <div className="flex items-end space-x-1">
                                  <p className='h-3 w-2 rounded-md bg-yellow-500'></p>
                                  <p className='h-5 w-2 rounded-md bg-gray-300'></p>
                                  <p className='h-7 w-2 rounded-md bg-gray-300'></p>
                                </div>
                              </button>
                              <button onClick={() => setSelectedPriority("medium")} type="button" className={`rounded px-5 py-2 ${ selectedPriority == "medium" ? 'ring-indigo-600 ring-2' : 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50' } px-2 py-1 text-sm font-semibold shadow-sm ring-1 ring-inset`}>
                                <div className="flex items-end space-x-1">
                                  <p className='h-3 w-2 rounded-md bg-orange-500'></p>
                                  <p className='h-5 w-2 rounded-md bg-orange-500'></p>
                                  <p className='h-7 w-2 rounded-md bg-gray-300'></p>
                                </div>
                              </button>
                              <button onClick={() => setSelectedPriority("high")} type="button" className={`rounded px-5 py-2 ${ selectedPriority == "high" ? 'ring-indigo-600 ring-2' : 'bg-white text-gray-900 ring-gray-300 hover:bg-gray-50' } px-2 py-1 text-sm font-semibold shadow-sm ring-1 ring-inset`}>
                                <div className="flex items-end space-x-1">
                                  <p className='h-3 w-2 rounded-md bg-red-500'></p>
                                  <p className='h-5 w-2 rounded-md bg-red-500'></p>
                                  <p className='h-7 w-2 rounded-md bg-red-500'></p>
                                </div>
                              </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="pb-6 pt-4">
                          <div className="flex text-sm">
                            <a href="#" className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900">
                              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                              </svg>
                              <span className="ml-2">Copy link</span>
                            </a>
                          </div>
                          <div className="mt-4 flex text-sm">
                            <a href="#" className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                              <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                              </svg>
                              <span className="ml-2">Learn more about sharing</span>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 justify-end px-4 py-4">
                    <button onClick={() => setOpenTaskSlider(false)} type="button" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                    <button onClick={() => type == 'NEW' ? saveTask() : type == "EDIT" ? editTask() : ""} type="submit" className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default TaskSlider;
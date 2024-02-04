import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchAllProjects } from '../store/reducers/taskReducer';

const ProjectSlider = ({ type, openProjectSlider, setOpenProjectSlider, payload }) => {
  const { id, project_title, project_description, collaborators } = payload;
  
  const dispatch = useDispatch();
  
  // title & description
  const [title, setTitle] = useState(project_title);
  const [description, setDescription] = useState(project_description);

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

  const saveProject = () => {
    let id = generateRandomId()
    let payload = {
      "id": id,
      "title": title,
      "description": description,
      "collaborators": selectedCollaborators,
    }

    const items = JSON.parse(localStorage.getItem('task-minder-projects'));
    let result = items ? [...items, payload] : [payload]
    localStorage.setItem('task-minder-projects', JSON.stringify(result));
    setOpenProjectSlider(false);
    dispatch(fetchAllProjects());
  }

  const editProject = () => {
    let projects = JSON.parse(localStorage.getItem('task-minder-projects'));
    projects.map((item) => {
      if(item.id == id) {
        item.title  = title;
        item.description  = description;
        item.collaborators  = selectedCollaborators;
      }
    })
    localStorage.setItem('task-minder-projects', JSON.stringify(projects));
    setOpenProjectSlider(false);
    dispatch(fetchAllProjects());
  }
  
  if(!openProjectSlider){
    return (
      <></>
    )
  }
  
  return (<>
    <div className="">
      <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        <div className={openProjectSlider ? 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' : ''}></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pt-20 hide_scroll pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <div className={`pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 ${openProjectSlider ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                  <div className="h-0 flex-1 overflow-y-auto">
                    <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-base font-semibold leading-6 text-white capitalize" id="slide-over-title">{type} PROJECT</h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button onClick={() => setOpenProjectSlider(false)} type="button" className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                            <span className="absolute -inset-2.5"></span>
                            <span className="sr-only">Close panel</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-indigo-300">Get started by filling in the information below to create your new project.</p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="divide-y divide-gray-200 px-4 sm:px-6">
                        <div className="space-y-6 pb-5 pt-6">
                          {/* title */}
                          <div className="">
                            <label htmlFor="project-name" className="block text-sm font-medium leading-6 text-gray-900">Project Name</label>
                            <div className="mt-2">
                              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="project-name" id="project-name" placeholder="Project Name" className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                              <div className="relative flex items-center space-x-2">
                                {
                                  selectedCollaborators?.slice(0,3).map((item, index) => {
                                    return (
                                      <a key={index} href="#" className="relative rounded-full hover:opacity-75">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">{ item.name.slice(0,1) }</span>
                                      </a>
                                    )
                                  })
                                }
                                {
                                  selectedCollaborators.length > 3 &&
                                  <a href="#" className="relative rounded-full hover:opacity-75">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">{ selectedCollaborators.length - 3 + '+' }</span>
                                  </a>
                                }
                                <button onClick={() => setOpenCollaboratorsDropdown(!openCollaboratorsDropdown)} type="button" className="relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                  {/* <span className="absolute -inset-2"></span> */}
                                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                  </svg>
                                </button>
                                {
                                  openCollaboratorsDropdown &&
                                  <ul className={`absolute z-10 top-[35px] max-w-[385px] w-full max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${openCollaboratorsDropdown ? '' : 'transition ease-in duration-100 opacity-0'}`} tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                                    {
                                      allcollaborators.map((item, index) => {
                                        return(
                                          <li onClick={() => selectCollaborators(item)} className="cursor-pointer text-gray-900 relative select-none py-2 pl-3 pr-9" key={`listbox-option-${index}`} id={`listbox-option-${index}`} role="option">
                                            <div className="flex items-center">
                                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">{ item.name.slice(0,1) }</span>
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 justify-end px-4 py-4">
                    <button onClick={() => setOpenProjectSlider(false)} type="button" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                    <button onClick={() => type == 'NEW' ? saveProject() : type == "EDIT" ? editProject() : ""} type="submit" className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
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

export default ProjectSlider;
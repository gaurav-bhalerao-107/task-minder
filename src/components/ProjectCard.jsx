import React, { useState } from "react";
import ProjectSlider from "./ProjectSlider";
import { useDispatch } from "react-redux";
import { fetchAllProjects } from "../store/reducers/taskReducer";

const ProjectCard = ({ project }) => {
  const { id, title, description, collaborators } = project;
  const dispatch = useDispatch();
  const [openProjectSlider, setOpenProjectSlider] = useState(false);
  const [openProjectDeleteDialog, setOpenProjectDeleteDialog] = useState(false);
  const payload = {
    "id": id,
    "project_title": title,
    "project_description": description,
    "collaborators": collaborators,
  }

  const deleteProjects = () => {
    let projects = JSON.parse(localStorage.getItem('task-minder-projects'));
    let filteredProjects = projects.filter((item) => {
      return item.id != id;
    })
    localStorage.setItem('task-minder-projects', JSON.stringify(filteredProjects));
    setOpenProjectDeleteDialog(false);
    dispatch(fetchAllProjects());
  }

  return (
    <>
      <section id="project-card" className="project-card pb-3 h-full">
        <div className="relative py-5 px-3 rounded-[8px] bg-gray-100 h-full" draggable="true">
          <div className="">
            <div className="flex items-center justify-between">
              <div className="">
                {/* style={ status.id == 'todo' ? {background: 'var(--Primary-100, #EEF2FC)'} : status.id == 'in-progress' ? {background: 'var(--Warning-100, #FFF6EB)'} : status.id == "done" ? {background: 'var(--Error-100, #FDF0EC)'} : {background: 'var(--Primary-100, #EEF2FC)'} } */}
                <div className="px-3 py-1 rounded-full border-2 cursor-pointer">
                  <div className="text-black text-xs font-medium leading-normal">{project.title}</div>
                </div>
                
              </div>
              <div className="flex items-center space-x-2">
                {/* edit */}
                <div onClick={() => setOpenProjectSlider(true)} className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 cursor-pointer' viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.1306 4.19396C15.5648 4.01413 16.0301 3.92157 16.5 3.92157C16.9699 3.92157 17.4353 4.01413 17.8694 4.19396C18.3036 4.37379 18.698 4.63738 19.0303 4.96967C19.3626 5.30195 19.6262 5.69644 19.806 6.13059C19.9859 6.56475 20.0784 7.03007 20.0784 7.5C20.0784 7.96992 19.9859 8.43524 19.806 8.8694C19.6262 9.30356 19.3626 9.69804 19.0303 10.0303L8.53033 20.5303C8.38968 20.671 8.19891 20.75 8 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V16C3.25 15.8011 3.32902 15.6103 3.46967 15.4697L13.9697 4.96967C14.302 4.63738 14.6964 4.37379 15.1306 4.19396ZM16.5 5.42157C16.2271 5.42157 15.9568 5.47533 15.7046 5.57978C15.4525 5.68423 15.2233 5.83733 15.0303 6.03033L4.75 16.3107V19.25H7.68934L17.9697 8.96967C18.1627 8.77667 18.3158 8.54754 18.4202 8.29538C18.5247 8.04321 18.5784 7.77294 18.5784 7.5C18.5784 7.22705 18.5247 6.95678 18.4202 6.70462C18.3158 6.45245 18.1627 6.22333 17.9697 6.03033C17.7767 5.83733 17.5475 5.68423 17.2954 5.57978C17.0432 5.47533 16.7729 5.42157 16.5 5.42157Z" fill="#3D3D3D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9697 5.96967C13.2626 5.67678 13.7374 5.67678 14.0303 5.96967L18.0303 9.96967C18.3232 10.2626 18.3232 10.7374 18.0303 11.0303C17.7374 11.3232 17.2626 11.3232 16.9697 11.0303L12.9697 7.03033C12.6768 6.73744 12.6768 6.26256 12.9697 5.96967Z" fill="#3D3D3D"/>
                  </svg>
                </div>
                {/* delete */}
                <div onClick={() => setOpenProjectDeleteDialog(true)} className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H20C20.4142 6.25 20.75 6.58579 20.75 7C20.75 7.41421 20.4142 7.75 20 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7Z" fill="#3D3D3D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 10.25C10.4142 10.25 10.75 10.5858 10.75 11V17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17V11C9.25 10.5858 9.58579 10.25 10 10.25Z" fill="#3D3D3D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 10.25C14.4142 10.25 14.75 10.5858 14.75 11V17C14.75 17.4142 14.4142 17.75 14 17.75C13.5858 17.75 13.25 17.4142 13.25 17V11C13.25 10.5858 13.5858 10.25 14 10.25Z" fill="#3D3D3D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.9377 6.25259C5.35048 6.21819 5.71299 6.52493 5.74739 6.93771L6.74739 18.9377C6.74912 18.9584 6.74998 18.9792 6.74998 19C6.74998 19.3315 6.88168 19.6495 7.1161 19.8839C7.35052 20.1183 7.66846 20.25 7.99998 20.25H16C16.3315 20.25 16.6494 20.1183 16.8839 19.8839C17.1183 19.6495 17.25 19.3315 17.25 19C17.25 18.9792 17.2508 18.9584 17.2526 18.9377L18.2526 6.93771C18.287 6.52493 18.6495 6.21819 19.0623 6.25259C19.475 6.28699 19.7818 6.6495 19.7474 7.06228L18.7498 19.0337C18.741 19.7508 18.4523 20.4368 17.9445 20.9445C17.4288 21.4603 16.7293 21.75 16 21.75H7.99998C7.27063 21.75 6.57116 21.4603 6.05544 20.9445C5.54765 20.4368 5.25896 19.7508 5.25019 19.0337L4.25257 7.06228C4.21817 6.6495 4.52491 6.28699 4.9377 6.25259Z" fill="#3D3D3D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 3.75C9.9337 3.75 9.87011 3.77634 9.82322 3.82322C9.77634 3.87011 9.75 3.9337 9.75 4V7C9.75 7.41421 9.41421 7.75 9 7.75C8.58579 7.75 8.25 7.41421 8.25 7V4C8.25 3.53587 8.43437 3.09075 8.76256 2.76256C9.09075 2.43437 9.53587 2.25 10 2.25H14C14.4641 2.25 14.9092 2.43437 15.2374 2.76256C15.5656 3.09075 15.75 3.53587 15.75 4V7C15.75 7.41421 15.4142 7.75 15 7.75C14.5858 7.75 14.25 7.41421 14.25 7V4C14.25 3.9337 14.2237 3.87011 14.1768 3.82322C14.1299 3.77634 14.0663 3.75 14 3.75H10Z" fill="#3D3D3D"/>
                  </svg>
                </div>
                {/* priority */}
              </div>
            </div>

            <div className="py-3">
              <div className="text-lg font-semibold line-clamp-1">{title}</div>
              <div className="text-sm font-normal text-[#5C5C5C] mt-1 leading-normal">
                { 
                  description ? 
                  description :
                  <p className="text-gray-400">Project without description</p>
                }
              </div>
            </div>
            {/* <div className="border-2 border-gray-100 h-[1px] mt-3"></div> */}
            <div className="pt-5 border-t-2 flex items-center w-full px-1">
              <div className="flex items-center w-full space-x-1">
                {
                    
                    collaborators.slice(0,5).map((item) => {
                        return (
                            <a key={item.id} href="#" className="relative rounded-full hover:opacity-75 -mt-2 flex items-center space-x-2">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-400 bg-blue-500 text-[0.670rem] font-medium text-white">{ item.name.slice(0,1) }</span>
                            </a>
                        )
                    })
                }

                {
                  collaborators.length > 5 &&
                  <a href="#" className="relative rounded-full hover:opacity-75 -mt-2 flex items-center space-x-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-400 bg-blue-500 text-[0.670rem] font-medium text-white">{ collaborators.length  - 5 }+</span>
                  </a>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* edit project slider */}
      <section className='project-slider'>
        <ProjectSlider type="EDIT" openProjectSlider={openProjectSlider} setOpenProjectSlider={setOpenProjectSlider} payload={payload} />
      </section>

      {/* delete project dialog */}
      {
        openProjectDeleteDialog &&
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${openProjectDeleteDialog ? 'ease-in duration-200 opacity-100' : 'ease-out duration-300 opacity-0'}`}></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className={`relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 ${openProjectDeleteDialog ? 'ease-in duration-200 opacity-100 translate-y-0 sm:scale-100' : 'ease-out duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}`}>
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button onClick={() => setOpenProjectDeleteDialog(false)} type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Are You Sure You Want to Delete?</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Deleting this project will also remove all its associated tasks permanently. Do you want to proceed with the deletion? Click “Delete” to confirm or “Cancel” to keep everything as is.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button onClick={() => deleteProjects()} type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Delete</button>
                  <button onClick={() => setOpenProjectDeleteDialog(false)} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ProjectCard;

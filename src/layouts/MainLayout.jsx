import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes, useLocation, Link, useParams } from "react-router-dom";
import Dashboard from '../pages/dashboard/Dashboard';
import Projects from '../pages/projects/Projects';
import Tasks from '../pages/tasks/Tasks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProjects } from '../store/reducers/taskReducer';

// images
import logo from "../assets/brand/logo.png";
import ProjectTasks from '../pages/tasks/ProjectTasks';

const MainLayout = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;
  const [openSidebar, setopenSidebar] = useState(true);
  const dispatch = useDispatch();
  const { projectId } = useParams();
  console.log("projectId...", projectId);

  const projects = useSelector((state) => state.tasks.projects || [])
  useEffect(() => {
    dispatch(fetchAllProjects());
  }, [])
  

  return (<>
    <section id="main-layout" className='main-layout'>
      <div>
        {/* <!-- mobile sidebar --> */}
        <div className={`relative lg:hidden ${openSidebar ? 'z-50' : ''}`} role="dialog" aria-modal="true">
          <div className={`fixed inset-0 bg-gray-900/80 transition-opacity ease-linear duration-300 ${openSidebar ? 'opacity-100' : 'opacity-0'}`}></div>
          

          <div className="fixed inset-0 flex">
            <div className={`relative mr-16 flex w-full max-w-[280px] flex-1 transition ease-in-out duration-300 ${openSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className={`absolute left-full top-0 flex w-16 justify-center pt-5 ease-in-out duration-300 ${openSidebar ? 'opacity-100' : 'opacity-0'}`}>
                <button onClick={() => setopenSidebar(false)} type="button" className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
              <div className={`flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4`}>
                <div className="flex h-16 shrink-0 items-center justify-center mt-2">
                  <img className="h-7 w-auto" src={logo} alt="Task Minder" />
                  <p className='text-3xl -mt-[3px] font-medium ml-2'>Task Minder.</p>
                </div>
                <nav className="flex flex-1 flex-col items-center">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-5">
                        <li>
                          <Link to="/dashboard" className={`${pathname == '/' || pathname == '/dashboard' ? 'bg-[#14367B] text-[#EEF2FC]' : 'bg-[#EEF2FC] text-[#14367B]'} group flex gap-x-3 rounded-md px-5 w-52 py-3 text-base leading-6`}>
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill={pathname == '/' || pathname == '/dashboard' ? '#EEF2FC' : '#14367B' }  xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H10C10.4142 3.25 10.75 3.58579 10.75 4V12C10.75 12.4142 10.4142 12.75 10 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12V4ZM4.75 4.75V11.25H9.25V4.75H4.75Z" fill={pathname == '/' || pathname == '/dashboard' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M3.25 16C3.25 15.5858 3.58579 15.25 4 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16V20C10.75 20.4142 10.4142 20.75 10 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V16ZM4.75 16.75V19.25H9.25V16.75H4.75Z" fill={pathname == '/' || pathname == '/dashboard' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M13.25 12C13.25 11.5858 13.5858 11.25 14 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12V20C20.75 20.4142 20.4142 20.75 20 20.75H14C13.5858 20.75 13.25 20.4142 13.25 20V12ZM14.75 12.75V19.25H19.25V12.75H14.75Z" fill={pathname == '/' || pathname == '/dashboard' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M13.25 4C13.25 3.58579 13.5858 3.25 14 3.25H20C20.4142 3.25 20.75 3.58579 20.75 4V8C20.75 8.41421 20.4142 8.75 20 8.75H14C13.5858 8.75 13.25 8.41421 13.25 8V4ZM14.75 4.75V7.25H19.25V4.75H14.75Z" fill={pathname == '/' || pathname == '/dashboard' ? '#EEF2FC' : '#14367B' } />
                            </svg>

                            Dashboard
                          </Link>
                        </li>

                        <li>
                          <Link to="/projects" className={`${pathname == '/projects' ? 'bg-[#14367B] text-[#EEF2FC]' : 'bg-[#EEF2FC] text-[#14367B]'} group flex gap-x-3 rounded-md px-5 w-52 py-3 text-base leading-6`}>
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill={pathname == '/projects' ? '#EEF2FC' : '#14367B' }  xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M9 4.75C8.66848 4.75 8.35054 4.8817 8.11612 5.11612C7.8817 5.35054 7.75 5.66848 7.75 6V15C7.75 15.3315 7.8817 15.6495 8.11612 15.8839C8.35054 16.1183 8.66848 16.25 9 16.25H19C19.3315 16.25 19.6495 16.1183 19.8839 15.8839C20.1183 15.6495 20.25 15.3315 20.25 15V8C20.25 7.66848 20.1183 7.35054 19.8839 7.11612C19.6495 6.8817 19.3315 6.75 19 6.75H14C13.8011 6.75 13.6103 6.67098 13.4697 6.53033L11.6893 4.75H9ZM7.05546 4.05546C7.57118 3.53973 8.27065 3.25 9 3.25H12C12.1989 3.25 12.3897 3.32902 12.5303 3.46967L14.3107 5.25H19C19.7293 5.25 20.4288 5.53973 20.9445 6.05546C21.4603 6.57118 21.75 7.27065 21.75 8V15C21.75 15.7293 21.4603 16.4288 20.9445 16.9445C20.4288 17.4603 19.7293 17.75 19 17.75H9C8.27065 17.75 7.57118 17.4603 7.05546 16.9445C6.53973 16.4288 6.25 15.7293 6.25 15V6C6.25 5.27065 6.53973 4.57118 7.05546 4.05546Z" fill={pathname == '/projects' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M5 8.75C4.66848 8.75 4.35054 8.8817 4.11612 9.11612C3.8817 9.35054 3.75 9.66848 3.75 10V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H15C15.3315 20.25 15.6495 20.1183 15.8839 19.8839C16.1183 19.6495 16.25 19.3315 16.25 19V17C16.25 16.5858 16.5858 16.25 17 16.25C17.4142 16.25 17.75 16.5858 17.75 17V19C17.75 19.7293 17.4603 20.4288 16.9445 20.9445C16.4288 21.4603 15.7293 21.75 15 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V10C2.25 9.27065 2.53973 8.57118 3.05546 8.05546C3.57118 7.53973 4.27065 7.25 5 7.25H7C7.41421 7.25 7.75 7.58579 7.75 8C7.75 8.41421 7.41421 8.75 7 8.75H5Z" fill={pathname == '/projects' ? '#EEF2FC' : '#14367B' } />
                            </svg>

                            Projects
                          </Link>
                        </li>

                        <li>
                          <Link to="/tasks/all" className={`${pathname == '/tasks/all' ? 'bg-[#14367B] text-[#EEF2FC]' : 'bg-[#EEF2FC] text-[#14367B]'} group flex gap-x-3 rounded-md px-5 w-52 py-3 text-base leading-6`}>
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' }  xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M8.03033 3.96967C8.32322 4.26256 8.32322 4.73744 8.03033 5.03033L5.53033 7.53033C5.23744 7.82322 4.76256 7.82322 4.46967 7.53033L2.96967 6.03033C2.67678 5.73744 2.67678 5.26256 2.96967 4.96967C3.26256 4.67678 3.73744 4.67678 4.03033 4.96967L5 5.93934L6.96967 3.96967C7.26256 3.67678 7.73744 3.67678 8.03033 3.96967Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M8.03033 9.96967C8.32322 10.2626 8.32322 10.7374 8.03033 11.0303L5.53033 13.5303C5.23744 13.8232 4.76256 13.8232 4.46967 13.5303L2.96967 12.0303C2.67678 11.7374 2.67678 11.2626 2.96967 10.9697C3.26256 10.6768 3.73744 10.6768 4.03033 10.9697L5 11.9393L6.96967 9.96967C7.26256 9.67678 7.73744 9.67678 8.03033 9.96967Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M8.03033 15.9697C8.32322 16.2626 8.32322 16.7374 8.03033 17.0303L5.53033 19.5303C5.23744 19.8232 4.76256 19.8232 4.46967 19.5303L2.96967 18.0303C2.67678 17.7374 2.67678 17.2626 2.96967 16.9697C3.26256 16.6768 3.73744 16.6768 4.03033 16.9697L5 17.9393L6.96967 15.9697C7.26256 15.6768 7.73744 15.6768 8.03033 15.9697Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.25 6C10.25 5.58579 10.5858 5.25 11 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H11C10.5858 6.75 10.25 6.41421 10.25 6Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.25 12C10.25 11.5858 10.5858 11.25 11 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H11C10.5858 12.75 10.25 12.4142 10.25 12Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.25 18C10.25 17.5858 10.5858 17.25 11 17.25H20C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75H11C10.5858 18.75 10.25 18.4142 10.25 18Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                            </svg>

                            Tasks
                          </Link>
                        </li>

                        {/* <li>
                          <a href="#" className={`${pathname == '/calendar' ? 'bg-[#14367B] text-[#EEF2FC]' : 'bg-[#EEF2FC] text-[#14367B]'} group flex gap-x-3 rounded-md px-5 w-52 py-3 text-base leading-6`}>
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill={pathname == '/calendar'? '#EEF2FC' : '#14367B' }  xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M6 5.75C5.66848 5.75 5.35054 5.8817 5.11612 6.11612C4.8817 6.35054 4.75 6.66848 4.75 7V19C4.75 19.3315 4.8817 19.6495 5.11612 19.8839C5.35054 20.1183 5.66848 20.25 6 20.25H11.5C11.9142 20.25 12.25 20.5858 12.25 21C12.25 21.4142 11.9142 21.75 11.5 21.75H6C5.27065 21.75 4.57118 21.4603 4.05546 20.9445C3.53973 20.4288 3.25 19.7293 3.25 19V7C3.25 6.27065 3.53973 5.57118 4.05546 5.05546C4.57118 4.53973 5.27065 4.25 6 4.25H18C18.7293 4.25 19.4288 4.53973 19.9445 5.05546C20.4603 5.57118 20.75 6.27065 20.75 7V13C20.75 13.4142 20.4142 13.75 20 13.75C19.5858 13.75 19.25 13.4142 19.25 13V7C19.25 6.66848 19.1183 6.35054 18.8839 6.11612C18.6495 5.8817 18.3315 5.75 18 5.75H6Z" fill={pathname == '/calendar' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M16 2.25C16.4142 2.25 16.75 2.58579 16.75 3V7C16.75 7.41421 16.4142 7.75 16 7.75C15.5858 7.75 15.25 7.41421 15.25 7V3C15.25 2.58579 15.5858 2.25 16 2.25Z" fill={pathname == '/calendar' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M8 2.25C8.41421 2.25 8.75 2.58579 8.75 3V7C8.75 7.41421 8.41421 7.75 8 7.75C7.58579 7.75 7.25 7.41421 7.25 7V3C7.25 2.58579 7.58579 2.25 8 2.25Z" fill={pathname == '/calendar' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M3.25 11C3.25 10.5858 3.58579 10.25 4 10.25H20C20.4142 10.25 20.75 10.5858 20.75 11C20.75 11.4142 20.4142 11.75 20 11.75H4C3.58579 11.75 3.25 11.4142 3.25 11Z" fill={pathname == '/calendar' ? '#EEF2FC' : '#14367B' } />
                              <path fillRule="evenodd" clipRule="evenodd" d="M21.5303 16.4697C21.8232 16.7626 21.8232 17.2374 21.5303 17.5303L17.5303 21.5303C17.2374 21.8232 16.7626 21.8232 16.4697 21.5303L14.4697 19.5303C14.1768 19.2374 14.1768 18.7626 14.4697 18.4697C14.7626 18.1768 15.2374 18.1768 15.5303 18.4697L17 19.9393L20.4697 16.4697C20.7626 16.1768 21.2374 16.1768 21.5303 16.4697Z" fill={pathname == '/calendar' ? '#EEF2FC' : '#14367B' } />
                            </svg>

                            Calendar
                          </a>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs font-semibold leading-6">Your Projects</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-3">
                        {
                          projects.map((project) => {
                            return (
                              <li key={project.id}>
                                <Link to={ 'tasks/' + project.id } className={`text-[#14367B] group flex gap-x-3 rounded-md px-5 w-52 py-2 leading-6 text-sm ${projectId == project.id ? 'font-bold' : ''}`}>
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">{ project.title.slice(0,1) }</span>
                                  <span className="truncate">{ project.title }</span>
                                </Link>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a href="#" className="group -mx-2 flex gap-x-3 rounded-md px-5 py-3 w-52 text-base leading-6 text-[#81290E] bg-[#FDF0EC]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M9.53033 5.46967C9.82322 5.76256 9.82322 6.23744 9.53033 6.53033L6.06066 10L9.53033 13.4697C9.82322 13.7626 9.82322 14.2374 9.53033 14.5303C9.23744 14.8232 8.76256 14.8232 8.46967 14.5303L4.46967 10.5303C4.17678 10.2374 4.17678 9.76256 4.46967 9.46967L8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967Z" fill="#81290E"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.25 10C4.25 9.58579 4.58579 9.25 5 9.25H16C17.2598 9.25 18.468 9.75044 19.3588 10.6412C20.2496 11.532 20.75 12.7402 20.75 14C20.75 15.2598 20.2496 16.468 19.3588 17.3588C18.468 18.2496 17.2598 18.75 16 18.75H15C14.5858 18.75 14.25 18.4142 14.25 18C14.25 17.5858 14.5858 17.25 15 17.25H16C16.862 17.25 17.6886 16.9076 18.2981 16.2981C18.9076 15.6886 19.25 14.862 19.25 14C19.25 13.138 18.9076 12.3114 18.2981 11.7019C17.6886 11.0924 16.862 10.75 16 10.75H5C4.58579 10.75 4.25 10.4142 4.25 10Z" fill="#81290E"/>
                        </svg>
                        Log out
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- desktop sidebar --> */}
        <div className={`transition ease-in-out duration-300 hidden lg:fixed lg:inset-y-0 lg:z-50   border ${openSidebar ? 'lg:flex lg:w-72 lg:flex-col' : ''}`}>
          <div className={`flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4`}>
            <div className="flex h-20 shrink-0 items-center justify-center">
              <div className="flex items-center">
                <img className="h-7 w-auto" src={logo} alt="Task Minder" />
                <p className='text-3xl -mt-[3px] font-medium ml-2'>Task Minder.</p>
              </div>
            </div>
            <nav className="flex flex-1 flex-col items-center">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-5">
                    <li>
                      <Link to="/dashboard" className={`${pathname == '/' || pathname == '/dashboard' ? 'bg-[#14367B] text-[#EEF2FC]' : 'bg-[#EEF2FC] text-[#14367B]'} group flex gap-x-3 rounded-md px-5 w-52 py-3 text-base leading-6`}>
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={pathname == '/' || pathname == '/dashboard' ? '#EEF2FC' : '#14367B' }  xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H10C10.4142 3.25 10.75 3.58579 10.75 4V12C10.75 12.4142 10.4142 12.75 10 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12V4ZM4.75 4.75V11.25H9.25V4.75H4.75Z" fill={pathname == '/' || pathname == '/dashboard' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M3.25 16C3.25 15.5858 3.58579 15.25 4 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16V20C10.75 20.4142 10.4142 20.75 10 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V16ZM4.75 16.75V19.25H9.25V16.75H4.75Z" fill={pathname == '/' || pathname == '/dashboard' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M13.25 12C13.25 11.5858 13.5858 11.25 14 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12V20C20.75 20.4142 20.4142 20.75 20 20.75H14C13.5858 20.75 13.25 20.4142 13.25 20V12ZM14.75 12.75V19.25H19.25V12.75H14.75Z" fill={pathname == '/' || pathname == '/dashboard' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M13.25 4C13.25 3.58579 13.5858 3.25 14 3.25H20C20.4142 3.25 20.75 3.58579 20.75 4V8C20.75 8.41421 20.4142 8.75 20 8.75H14C13.5858 8.75 13.25 8.41421 13.25 8V4ZM14.75 4.75V7.25H19.25V4.75H14.75Z" fill={pathname == '/' || pathname == '/dashboard' ? '#EEF2FC' : '#14367B' } />
                        </svg>

                        Dashboard
                      </Link>
                    </li>

                    <li>
                      <Link to="/projects" className={`${pathname == '/projects' ? 'bg-[#14367B] text-[#EEF2FC]' : 'bg-[#EEF2FC] text-[#14367B]'} group flex gap-x-3 rounded-md px-5 w-52 py-3 text-base leading-6`}>
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={pathname == '/projects' ? '#EEF2FC' : '#14367B' }  xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M9 4.75C8.66848 4.75 8.35054 4.8817 8.11612 5.11612C7.8817 5.35054 7.75 5.66848 7.75 6V15C7.75 15.3315 7.8817 15.6495 8.11612 15.8839C8.35054 16.1183 8.66848 16.25 9 16.25H19C19.3315 16.25 19.6495 16.1183 19.8839 15.8839C20.1183 15.6495 20.25 15.3315 20.25 15V8C20.25 7.66848 20.1183 7.35054 19.8839 7.11612C19.6495 6.8817 19.3315 6.75 19 6.75H14C13.8011 6.75 13.6103 6.67098 13.4697 6.53033L11.6893 4.75H9ZM7.05546 4.05546C7.57118 3.53973 8.27065 3.25 9 3.25H12C12.1989 3.25 12.3897 3.32902 12.5303 3.46967L14.3107 5.25H19C19.7293 5.25 20.4288 5.53973 20.9445 6.05546C21.4603 6.57118 21.75 7.27065 21.75 8V15C21.75 15.7293 21.4603 16.4288 20.9445 16.9445C20.4288 17.4603 19.7293 17.75 19 17.75H9C8.27065 17.75 7.57118 17.4603 7.05546 16.9445C6.53973 16.4288 6.25 15.7293 6.25 15V6C6.25 5.27065 6.53973 4.57118 7.05546 4.05546Z" fill={pathname == '/projects' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5 8.75C4.66848 8.75 4.35054 8.8817 4.11612 9.11612C3.8817 9.35054 3.75 9.66848 3.75 10V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H15C15.3315 20.25 15.6495 20.1183 15.8839 19.8839C16.1183 19.6495 16.25 19.3315 16.25 19V17C16.25 16.5858 16.5858 16.25 17 16.25C17.4142 16.25 17.75 16.5858 17.75 17V19C17.75 19.7293 17.4603 20.4288 16.9445 20.9445C16.4288 21.4603 15.7293 21.75 15 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V10C2.25 9.27065 2.53973 8.57118 3.05546 8.05546C3.57118 7.53973 4.27065 7.25 5 7.25H7C7.41421 7.25 7.75 7.58579 7.75 8C7.75 8.41421 7.41421 8.75 7 8.75H5Z" fill={pathname == '/projects' ? '#EEF2FC' : '#14367B' } />
                        </svg>

                        Projects
                      </Link>
                    </li>

                    <li>
                      <Link to="/tasks/all" className={`${pathname == '/tasks/all' ? 'bg-[#14367B] text-[#EEF2FC]' : 'bg-[#EEF2FC] text-[#14367B]'} group flex gap-x-3 rounded-md px-5 w-52 py-3 text-base leading-6`}>
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' }  xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.03033 3.96967C8.32322 4.26256 8.32322 4.73744 8.03033 5.03033L5.53033 7.53033C5.23744 7.82322 4.76256 7.82322 4.46967 7.53033L2.96967 6.03033C2.67678 5.73744 2.67678 5.26256 2.96967 4.96967C3.26256 4.67678 3.73744 4.67678 4.03033 4.96967L5 5.93934L6.96967 3.96967C7.26256 3.67678 7.73744 3.67678 8.03033 3.96967Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.03033 9.96967C8.32322 10.2626 8.32322 10.7374 8.03033 11.0303L5.53033 13.5303C5.23744 13.8232 4.76256 13.8232 4.46967 13.5303L2.96967 12.0303C2.67678 11.7374 2.67678 11.2626 2.96967 10.9697C3.26256 10.6768 3.73744 10.6768 4.03033 10.9697L5 11.9393L6.96967 9.96967C7.26256 9.67678 7.73744 9.67678 8.03033 9.96967Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.03033 15.9697C8.32322 16.2626 8.32322 16.7374 8.03033 17.0303L5.53033 19.5303C5.23744 19.8232 4.76256 19.8232 4.46967 19.5303L2.96967 18.0303C2.67678 17.7374 2.67678 17.2626 2.96967 16.9697C3.26256 16.6768 3.73744 16.6768 4.03033 16.9697L5 17.9393L6.96967 15.9697C7.26256 15.6768 7.73744 15.6768 8.03033 15.9697Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.25 6C10.25 5.58579 10.5858 5.25 11 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H11C10.5858 6.75 10.25 6.41421 10.25 6Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.25 12C10.25 11.5858 10.5858 11.25 11 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H11C10.5858 12.75 10.25 12.4142 10.25 12Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.25 18C10.25 17.5858 10.5858 17.25 11 17.25H20C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75H11C10.5858 18.75 10.25 18.4142 10.25 18Z" fill={pathname == '/tasks/all' ? '#EEF2FC' : '#14367B' } />
                        </svg>

                        Tasks
                      </Link>
                    </li>

                    {/* <li>
                      <a href="#" className={`${pathname == '/calendar' ? 'bg-[#14367B] text-[#EEF2FC]' : 'bg-[#EEF2FC] text-[#14367B]'} group flex gap-x-3 rounded-md px-5 w-52 py-3 text-base leading-6`}>
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill={pathname == '/calendar'? '#EEF2FC' : '#14367B' }  xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6 5.75C5.66848 5.75 5.35054 5.8817 5.11612 6.11612C4.8817 6.35054 4.75 6.66848 4.75 7V19C4.75 19.3315 4.8817 19.6495 5.11612 19.8839C5.35054 20.1183 5.66848 20.25 6 20.25H11.5C11.9142 20.25 12.25 20.5858 12.25 21C12.25 21.4142 11.9142 21.75 11.5 21.75H6C5.27065 21.75 4.57118 21.4603 4.05546 20.9445C3.53973 20.4288 3.25 19.7293 3.25 19V7C3.25 6.27065 3.53973 5.57118 4.05546 5.05546C4.57118 4.53973 5.27065 4.25 6 4.25H18C18.7293 4.25 19.4288 4.53973 19.9445 5.05546C20.4603 5.57118 20.75 6.27065 20.75 7V13C20.75 13.4142 20.4142 13.75 20 13.75C19.5858 13.75 19.25 13.4142 19.25 13V7C19.25 6.66848 19.1183 6.35054 18.8839 6.11612C18.6495 5.8817 18.3315 5.75 18 5.75H6Z" fill={pathname == '/calendar' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M16 2.25C16.4142 2.25 16.75 2.58579 16.75 3V7C16.75 7.41421 16.4142 7.75 16 7.75C15.5858 7.75 15.25 7.41421 15.25 7V3C15.25 2.58579 15.5858 2.25 16 2.25Z" fill={pathname == '/calendar' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 2.25C8.41421 2.25 8.75 2.58579 8.75 3V7C8.75 7.41421 8.41421 7.75 8 7.75C7.58579 7.75 7.25 7.41421 7.25 7V3C7.25 2.58579 7.58579 2.25 8 2.25Z" fill={pathname == '/calendar' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M3.25 11C3.25 10.5858 3.58579 10.25 4 10.25H20C20.4142 10.25 20.75 10.5858 20.75 11C20.75 11.4142 20.4142 11.75 20 11.75H4C3.58579 11.75 3.25 11.4142 3.25 11Z" fill={pathname == '/calendar' ? '#EEF2FC' : '#14367B' } />
                          <path fillRule="evenodd" clipRule="evenodd" d="M21.5303 16.4697C21.8232 16.7626 21.8232 17.2374 21.5303 17.5303L17.5303 21.5303C17.2374 21.8232 16.7626 21.8232 16.4697 21.5303L14.4697 19.5303C14.1768 19.2374 14.1768 18.7626 14.4697 18.4697C14.7626 18.1768 15.2374 18.1768 15.5303 18.4697L17 19.9393L20.4697 16.4697C20.7626 16.1768 21.2374 16.1768 21.5303 16.4697Z" fill={pathname == '/calendar' ? '#EEF2FC' : '#14367B' } />
                        </svg>

                        Calendar
                      </a>
                    </li> */}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6">Your Projects</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-3">
                    {
                      projects.map((project) => {
                        return (
                          <li key={project.id}>
                            <Link to={ 'tasks/' + project.id } className={`text-[#14367B] group flex gap-x-3 rounded-md px-5 w-52 py-2 leading-6 text-sm ${projectId == project.id ? 'font-bold' : ''}`}>
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">{project.title.slice(0,1)}</span>
                              <span className="truncate">{ project.title }</span>
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </li>
                <li className="mt-auto">
                  <a href="#" className="group -mx-2 flex gap-x-3 rounded-md px-5 py-3 w-52 text-base leading-6 text-[#81290E] bg-[#FDF0EC]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.53033 5.46967C9.82322 5.76256 9.82322 6.23744 9.53033 6.53033L6.06066 10L9.53033 13.4697C9.82322 13.7626 9.82322 14.2374 9.53033 14.5303C9.23744 14.8232 8.76256 14.8232 8.46967 14.5303L4.46967 10.5303C4.17678 10.2374 4.17678 9.76256 4.46967 9.46967L8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967Z" fill="#81290E"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.25 10C4.25 9.58579 4.58579 9.25 5 9.25H16C17.2598 9.25 18.468 9.75044 19.3588 10.6412C20.2496 11.532 20.75 12.7402 20.75 14C20.75 15.2598 20.2496 16.468 19.3588 17.3588C18.468 18.2496 17.2598 18.75 16 18.75H15C14.5858 18.75 14.25 18.4142 14.25 18C14.25 17.5858 14.5858 17.25 15 17.25H16C16.862 17.25 17.6886 16.9076 18.2981 16.2981C18.9076 15.6886 19.25 14.862 19.25 14C19.25 13.138 18.9076 12.3114 18.2981 11.7019C17.6886 11.0924 16.862 10.75 16 10.75H5C4.58579 10.75 4.25 10.4142 4.25 10Z" fill="#81290E"/>
                    </svg>
                    Log out
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={`${openSidebar ? 'lg:pl-72' : ''}`}>
          <div className="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button onClick={() => setopenSidebar(openSidebar ? false : true)} type="button" className="-m-2.5 p-2.5 text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"></div>

            <div className="flex items-center flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="relative flex flex-1">
                <label htmlFor="search-field" className="sr-only">Search</label>
                <svg className="pointer-events-none absolute inset-y-0 left-3 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                </svg>
                <input autoFocus id="search-field" className="block h-16 w-full border-0 py-0 pl-10 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." type="search" name="search" />
              </div>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>

                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true"></div>

                <div className="relative">
                  {/* <button type="button" className="-m-1.5 flex items-center p-1.5" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">Tom Cook</span>
                      <svg className="ml-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button> */}
                  
                  <div className={`hidden absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none ${openSidebar ? 'transition ease-out duration-100 transhtmlForm opacity-0 scale-95' : 'transition ease-in duration-75 transhtmlForm opacity-0 scale-100'}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                    <a href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your profile</a>
                    <a href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900" role="menuitem" tabIndex="-1" id="user-menu-item-1">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main className="relative pt-16 md:pt-28 pb-10">
            <div className="px-5 md:px-16">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks/:projectId" element={<Tasks />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </section>
  </>)
}

export default MainLayout;
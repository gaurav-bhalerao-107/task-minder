import React, { useEffect } from 'react';
import "./dashboard.css";
import TodoImage from "../../assets/dashboard/todo.png";
import InProgress from "../../assets/dashboard/in_progress.png";
import InReview from "../../assets/dashboard/in_review.png";
import DoneImage from "../../assets/dashboard/done.png";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTasks } from '../../store/reducers/taskReducer';

const Dashboard = () => {
  const dispatch = useDispatch();
  
  const tasks = useSelector((state) => state.tasks.tasks)
  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [])

  return (
    <>
      <section id="dashboard" className="relative dashboard max-w-[2050px] mx-auto">
        <div className="w-full flex flex-row items-center justify-between mb-9 max-w-[1474px]">
          <div className="text-3xl font-medium pb-0">Dashboard</div>
          <div className="action-buttons w-full flex items-center justify-end space-x-7">
            {/* profile */}
            <div className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75Z" fill="#3D3D3D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7Z" fill="#3D3D3D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.2735 2.94397C15.3762 2.5427 15.7848 2.3007 16.1861 2.40344C17.2078 2.66505 18.1134 3.25927 18.7602 4.09243C19.4069 4.92559 19.7579 5.9503 19.7579 7.005C19.7579 8.05971 19.4069 9.08441 18.7602 9.91757C18.1134 10.7507 17.2078 11.345 16.1861 11.6066C15.7848 11.7093 15.3762 11.4673 15.2735 11.066C15.1708 10.6648 15.4128 10.2562 15.814 10.1534C16.5131 9.97445 17.1327 9.56787 17.5752 8.99781C18.0177 8.42775 18.2579 7.72664 18.2579 7.005C18.2579 6.28336 18.0177 5.58225 17.5752 5.01219C17.1327 4.44213 16.5131 4.03556 15.814 3.85656C15.4128 3.75382 15.1708 3.34524 15.2735 2.94397Z" fill="#3D3D3D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.2739 14.9625C17.3774 14.5614 17.7865 14.3203 18.1875 14.4238C19.2027 14.6859 20.1025 15.2764 20.7469 16.1034C21.3913 16.9304 21.744 17.9473 21.75 18.9957L21.7501 19H21.7501V21C21.7501 21.4142 21.4143 21.75 21.0001 21.75C20.5858 21.75 20.2501 21.4142 20.2501 21V19.0022C20.2455 18.2857 20.0042 17.5907 19.5637 17.0254C19.1228 16.4596 18.5071 16.0555 17.8126 15.8762C17.4115 15.7726 17.1703 15.3636 17.2739 14.9625Z" fill="#3D3D3D"/>
              </svg>
            </div>
            {/* settings */}
            <div className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0555 4.05546C12.5712 3.53973 13.2707 3.25 14 3.25C14.7293 3.25 15.4288 3.53973 15.9445 4.05546C16.4603 4.57118 16.75 5.27065 16.75 6C16.75 6.72935 16.4603 7.42882 15.9445 7.94454C15.4288 8.46027 14.7293 8.75 14 8.75C13.2707 8.75 12.5712 8.46027 12.0555 7.94454C11.5397 7.42882 11.25 6.72935 11.25 6C11.25 5.27065 11.5397 4.57118 12.0555 4.05546ZM14 4.75C13.6685 4.75 13.3505 4.8817 13.1161 5.11612C12.8817 5.35054 12.75 5.66848 12.75 6C12.75 6.33152 12.8817 6.64946 13.1161 6.88388C13.3505 7.1183 13.6685 7.25 14 7.25C14.3315 7.25 14.6495 7.1183 14.8839 6.88388C15.1183 6.64946 15.25 6.33152 15.25 6C15.25 5.66848 15.1183 5.35054 14.8839 5.11612C14.6495 4.8817 14.3315 4.75 14 4.75Z" fill="#3D3D3D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H12C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75H4C3.58579 6.75 3.25 6.41421 3.25 6Z" fill="#3D3D3D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.25 6C15.25 5.58579 15.5858 5.25 16 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H16C15.5858 6.75 15.25 6.41421 15.25 6Z" fill="#3D3D3D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.05546 10.0555C6.57118 9.53973 7.27065 9.25 8 9.25C8.72935 9.25 9.42882 9.53973 9.94454 10.0555C10.4603 10.5712 10.75 11.2707 10.75 12C10.75 12.7293 10.4603 13.4288 9.94454 13.9445C9.42882 14.4603 8.72935 14.75 8 14.75C7.27065 14.75 6.57118 14.4603 6.05546 13.9445C5.53973 13.4288 5.25 12.7293 5.25 12C5.25 11.2707 5.53973 10.5712 6.05546 10.0555ZM8 10.75C7.66848 10.75 7.35054 10.8817 7.11612 11.1161C6.8817 11.3505 6.75 11.6685 6.75 12C6.75 12.3315 6.8817 12.6495 7.11612 12.8839C7.35054 13.1183 7.66848 13.25 8 13.25C8.33152 13.25 8.64946 13.1183 8.88388 12.8839C9.1183 12.6495 9.25 12.3315 9.25 12C9.25 11.6685 9.1183 11.3505 8.88388 11.1161C8.64946 10.8817 8.33152 10.75 8 10.75Z" fill="#3D3D3D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H6C6.41421 11.25 6.75 11.5858 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12Z" fill="#3D3D3D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12Z" fill="#3D3D3D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.0555 16.0555C15.5712 15.5397 16.2707 15.25 17 15.25C17.7293 15.25 18.4288 15.5397 18.9445 16.0555C19.4603 16.5712 19.75 17.2707 19.75 18C19.75 18.7293 19.4603 19.4288 18.9445 19.9445C18.4288 20.4603 17.7293 20.75 17 20.75C16.2707 20.75 15.5712 20.4603 15.0555 19.9445C14.5397 19.4288 14.25 18.7293 14.25 18C14.25 17.2707 14.5397 16.5712 15.0555 16.0555ZM17 16.75C16.6685 16.75 16.3505 16.8817 16.1161 17.1161C15.8817 17.3505 15.75 17.6685 15.75 18C15.75 18.3315 15.8817 18.6495 16.1161 18.8839C16.3505 19.1183 16.6685 19.25 17 19.25C17.3315 19.25 17.6495 19.1183 17.8839 18.8839C18.1183 18.6495 18.25 18.3315 18.25 18C18.25 17.6685 18.1183 17.3505 17.8839 17.1161C17.6495 16.8817 17.3315 16.75 17 16.75Z" fill="#3D3D3D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.25 18C3.25 17.5858 3.58579 17.25 4 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H4C3.58579 18.75 3.25 18.4142 3.25 18Z" fill="#3D3D3D"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18.25 18C18.25 17.5858 18.5858 17.25 19 17.25H20C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75H19C18.5858 18.75 18.25 18.4142 18.25 18Z" fill="#3D3D3D"/>
              </svg>
            </div>
            {/* new task */}
            {/* <div className="cursor-pointer">
              <button type="button" className="relative inline-flex items-center rounded-md bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Create New Task
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 25 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.5 4.25C12.9142 4.25 13.25 4.58579 13.25 5V19C13.25 19.4142 12.9142 19.75 12.5 19.75C12.0858 19.75 11.75 19.4142 11.75 19V5C11.75 4.58579 12.0858 4.25 12.5 4.25Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.75 12C4.75 11.5858 5.08579 11.25 5.5 11.25H19.5C19.9142 11.25 20.25 11.5858 20.25 12C20.25 12.4142 19.9142 12.75 19.5 12.75H5.5C5.08579 12.75 4.75 12.4142 4.75 12Z" fill="white"/>
                </svg>
              </button>
            </div> */}
          </div>
        </div>

        {/* task columns */}
        <section id="main-task-columns" className='main-task-columns overflow-x-auto hide_scroll'>
          <div className="flex justify-start space-x-5">
            <div className="relative w-[200px]">
              <img src={TodoImage} className='h-full w-full' alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-1 text-5xl font-bold text-white">{ tasks?.filter((item) => { return item.status.id == 'todo' })?.length || 0 }</div>
              <div className="absolute bottom-[10px] left-[10px] text-white font-semibold">To Do</div>
            </div>
            <div className="relative w-[200px]">
              <img src={InProgress} className='h-full w-full' alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-1 text-5xl font-bold text-white">{ tasks?.filter((item) => { return item.status.id == 'in-progress' })?.length || 0 }</div>
              <div className="absolute bottom-[10px] left-[10px] text-white font-semibold">In Progress</div>
            </div>
            <div className="relative w-[200px]">
              <img src={DoneImage} className='h-full w-full' alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -ml-1 text-5xl font-bold text-white">{ tasks?.filter((item) => { return item.status.id == 'done' })?.length || 0 }</div>
              <div className="absolute bottom-[10px] left-[10px] text-white font-semibold">Done</div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Dashboard;
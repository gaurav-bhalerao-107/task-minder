import { React, Fragment, useState } from 'react'
import TaskCard from './TaskCard'
import DropArea from './DropArea'
import { taskStatus } from '../constant/projects'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTasks } from '../store/reducers/taskReducer';

const TaskColumns = ({style, title, column, tasks, setActiveCard, activeCard}) => {
  const dispatch = useDispatch();

  const [showDrop, setShowDrop] = useState(false)

  const onDrop = (event, updatedColumn, updatedIndex) => {
    event.stopPropagation();
    const task_id = event.dataTransfer.getData("task_id");
    const currentIndex = event.dataTransfer.getData("current_index");
    const currentColumn = event.dataTransfer.getData("current_column");
    
    if(currentColumn == updatedColumn) return;
    
    
    editTaskStatus(currentColumn, currentIndex, updatedColumn, updatedIndex, task_id);
    
    setShowDrop(false);
  }

  const onDragOver = (event) => {
    event.preventDefault();
  }

  const onDragStart = (event, id, column, index) => {
    event.dataTransfer.setData("task_id", id);
    event.dataTransfer.setData("current_index", index);
    event.dataTransfer.setData("current_column", column);
    
    setShowDrop(false);
  }

  const editTaskStatus = (currentColumn, currentIndex, updatedColumn, updatedIndex, id) => {
    console.log("currentColumn...", currentColumn);
    console.log("currentIndex...", currentIndex);
    console.log("updatedColumn...", updatedColumn);
    console.log("updatedIndex...", updatedIndex);
    
    const status = taskStatus.find(item => item.id === updatedColumn);
    
    let tasks = JSON.parse(localStorage.getItem('task-minder'));
    tasks.map((item) => {
      if(item.id == id) {
        item.status  = status;
        item.sort = updatedIndex == null ? 0 : updatedIndex + 1;
      }
    })
    localStorage.setItem('task-minder', JSON.stringify(tasks));
    dispatch(fetchAllTasks());
  }

  return (<>
    <div className="max-w-[378px] w-[378px]">
      <div className="">
        <div 
          className="px-3"
          style={style}
        >
          <div className="py-3 mb-1">
            <div className="flex items-center">
              {
                title == "To Do" ?
                <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5 3.9375C4.71821 3.9375 4.44796 4.04944 4.2487 4.2487C4.04944 4.44796 3.9375 4.71821 3.9375 5V19C3.9375 19.2818 4.04944 19.552 4.2487 19.7513C4.44796 19.9506 4.71821 20.0625 5 20.0625H19C19.2818 20.0625 19.552 19.9506 19.7513 19.7513C19.9506 19.552 20.0625 19.2818 20.0625 19V5C20.0625 4.71821 19.9506 4.44796 19.7513 4.2487C19.552 4.04944 19.2818 3.9375 19 3.9375H5ZM2.92287 2.92287C3.47376 2.37199 4.22093 2.0625 5 2.0625H19C19.7791 2.0625 20.5262 2.37199 21.0771 2.92287C21.628 3.47376 21.9375 4.22093 21.9375 5V19C21.9375 19.7791 21.628 20.5262 21.0771 21.0771C20.5262 21.628 19.7791 21.9375 19 21.9375H5C4.22093 21.9375 3.47376 21.628 2.92287 21.0771C2.37199 20.5262 2.0625 19.7791 2.0625 19V5C2.0625 4.22093 2.37199 3.47376 2.92287 2.92287Z" fill="#14367B"/>
                </svg>

                : title == "In Progress" ?
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.75 7C5.75 6.58579 6.08579 6.25 6.5 6.25H17.5C17.9142 6.25 18.25 6.58579 18.25 7C18.25 7.41421 17.9142 7.75 17.5 7.75H6.5C6.08579 7.75 5.75 7.41421 5.75 7Z" fill="#8F4F00"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.75 17C5.75 16.5858 6.08579 16.25 6.5 16.25H17.5C17.9142 16.25 18.25 16.5858 18.25 17C18.25 17.4142 17.9142 17.75 17.5 17.75H6.5C6.08579 17.75 5.75 17.4142 5.75 17Z" fill="#8F4F00"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 12.75C10.6076 12.75 9.27226 13.3031 8.28769 14.2877C7.30312 15.2723 6.75 16.6076 6.75 18V20C6.75 20.0663 6.77634 20.1299 6.82322 20.1768C6.87011 20.2237 6.93369 20.25 7 20.25H17C17.0663 20.25 17.1299 20.2237 17.1768 20.1768C17.2237 20.1299 17.25 20.0663 17.25 20V18C17.25 16.6076 16.6969 15.2723 15.7123 14.2877C14.7277 13.3031 13.3924 12.75 12 12.75ZM7.22703 13.227C8.4929 11.9612 10.2098 11.25 12 11.25C13.7902 11.25 15.5071 11.9612 16.773 13.227C18.0388 14.4929 18.75 16.2098 18.75 18V20C18.75 20.4641 18.5656 20.9092 18.2374 21.2374C17.9092 21.5656 17.4641 21.75 17 21.75H7C6.53587 21.75 6.09075 21.5656 5.76256 21.2374C5.43437 20.9092 5.25 20.4641 5.25 20V18C5.25 16.2098 5.96116 14.4929 7.22703 13.227Z" fill="#8F4F00"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.76256 2.76256C6.09075 2.43437 6.53587 2.25 7 2.25H17C17.4641 2.25 17.9092 2.43437 18.2374 2.76256C18.5656 3.09075 18.75 3.53587 18.75 4V6C18.75 7.79021 18.0388 9.5071 16.773 10.773C15.5071 12.0388 13.7902 12.75 12 12.75C10.2098 12.75 8.4929 12.0388 7.22703 10.773C5.96116 9.5071 5.25 7.79021 5.25 6V4C5.25 3.53587 5.43437 3.09075 5.76256 2.76256ZM7 3.75C6.9337 3.75 6.87011 3.77634 6.82322 3.82322C6.77634 3.87011 6.75 3.9337 6.75 4V6C6.75 7.39239 7.30312 8.72774 8.28769 9.71231C9.27226 10.6969 10.6076 11.25 12 11.25C13.3924 11.25 14.7277 10.6969 15.7123 9.71231C16.6969 8.72774 17.25 7.39239 17.25 6V4C17.25 3.93369 17.2237 3.87011 17.1768 3.82322C17.1299 3.77634 17.0663 3.75 17 3.75H7Z" fill="#8F4F00"/>
                </svg>

                : title == "Done" ?
                <svg xmlns="http://www.w3.org/2000/svg"className='h-6 w-6' viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5 3.75C4.66848 3.75 4.35054 3.8817 4.11612 4.11612C3.8817 4.35054 3.75 4.66848 3.75 5V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H19C19.3315 20.25 19.6495 20.1183 19.8839 19.8839C20.1183 19.6495 20.25 19.3315 20.25 19V5C20.25 4.66848 20.1183 4.35054 19.8839 4.11612C19.6495 3.8817 19.3315 3.75 19 3.75H5ZM3.05546 3.05546C3.57118 2.53973 4.27065 2.25 5 2.25H19C19.7293 2.25 20.4288 2.53973 20.9445 3.05546C21.4603 3.57118 21.75 4.27065 21.75 5V19C21.75 19.7293 21.4603 20.4288 20.9445 20.9445C20.4288 21.4603 19.7293 21.75 19 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V5C2.25 4.27065 2.53973 3.57118 3.05546 3.05546Z" fill="#81290E"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.5303 9.46967C15.8232 9.76256 15.8232 10.2374 15.5303 10.5303L11.5303 14.5303C11.2374 14.8232 10.7626 14.8232 10.4697 14.5303L8.46967 12.5303C8.17678 12.2374 8.17678 11.7626 8.46967 11.4697C8.76256 11.1768 9.23744 11.1768 9.53033 11.4697L11 12.9393L14.4697 9.46967C14.7626 9.17678 15.2374 9.17678 15.5303 9.46967Z" fill="#81290E"/>
                </svg>
                
                :
                <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' viewBox="0 0 24 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5 3.9375C4.71821 3.9375 4.44796 4.04944 4.2487 4.2487C4.04944 4.44796 3.9375 4.71821 3.9375 5V19C3.9375 19.2818 4.04944 19.552 4.2487 19.7513C4.44796 19.9506 4.71821 20.0625 5 20.0625H19C19.2818 20.0625 19.552 19.9506 19.7513 19.7513C19.9506 19.552 20.0625 19.2818 20.0625 19V5C20.0625 4.71821 19.9506 4.44796 19.7513 4.2487C19.552 4.04944 19.2818 3.9375 19 3.9375H5ZM2.92287 2.92287C3.47376 2.37199 4.22093 2.0625 5 2.0625H19C19.7791 2.0625 20.5262 2.37199 21.0771 2.92287C21.628 3.47376 21.9375 4.22093 21.9375 5V19C21.9375 19.7791 21.628 20.5262 21.0771 21.0771C20.5262 21.628 19.7791 21.9375 19 21.9375H5C4.22093 21.9375 3.47376 21.628 2.92287 21.0771C2.37199 20.5262 2.0625 19.7791 2.0625 19V5C2.0625 4.22093 2.37199 3.47376 2.92287 2.92287Z" fill="#14367B"/>
                </svg>
              }
              
              <p className='text-xl font-medium ml-2'>{title}</p>
            </div>
          </div>
          <div className="flex flex-col overflow-auto hide_scroll max-h-[800px]" onDrop={(event) => onDrop(event, column)} onDragOver={onDragOver}>
            {
              tasks.length > 0 ?
              tasks.map((item, index) => {
                return (
                  <Fragment>
                    <DropArea showDrop={showDrop} />
                      <TaskCard task={item} index={index} onDragStart={onDragStart} onDrop={onDrop} onDragOver={onDragOver} updatedColumn={column} />
                    <DropArea showDrop={showDrop} />
                  </Fragment>
                )
              })
              :
              <div className="pb-7">
                <div className="text-center w-[351px]">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-semibold text-gray-900">No Tasks</h3>
                  <p className="mt-1 text-sm text-gray-500">Get started by creating a new task.</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default TaskColumns
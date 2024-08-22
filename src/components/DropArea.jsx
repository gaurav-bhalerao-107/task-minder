import { React } from 'react'

const DropArea = ({showDrop}) => {
  return (
    <div className={`mb-3 w-[351px] bg-gray-100 p-8 text-center rounded-[8px] border-dashed border-2 transition duration-300 ease-in-out ${showDrop ? 'block hover:border-blue-500' : 'hidden border-gray-300'}`} id="dropzone">
      <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center space-y-2">
        <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
        <span className="text-gray-600">Drop Here</span>
      </label>
    </div>
  )
}

export default DropArea
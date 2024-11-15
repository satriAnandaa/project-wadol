import React from 'react'

const Testing = ({isOpen}) => {
  return (
    <div className={`flex-1 bg-slate-200 ${isOpen ? "md:ml-44" : "ml-16"} transition-all duration-300 dark:bg-slate-800`}>
      <h1>
      
      Test
      </h1>
    </div>
  )
}

export default Testing

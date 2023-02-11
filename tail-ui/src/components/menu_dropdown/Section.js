import React from 'react';
import useCollapse from 'react-collapsed';

function Section({defaultExpanded, collapsedHeight, title, children}) {

  const config = {
    defaultExpanded: defaultExpanded || false,
    collapsedHeight: collapsedHeight || 0
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  return (
    <div className="px-8 w-full collapsible">
      <div className="header bg-purple-700 text-white" {...getToggleProps()}>
        <div className='flex flex-row'>
          <div className='pr-2'>Icon</div>
          <h6>{title}</h6>
          <div className='ml-auto'>Icon</div>
        </div>
      </div>
      <div {...getCollapseProps()} className="bg-purple-400">
        <div className="content flex flex-col items-start ml-4 bg-purple-400" >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Section

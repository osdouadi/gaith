import React from 'react'

function PanelSectionTitle({children}: {children: string}) {
  return (
    <h3 className='text-xl font-bold text-black'>
      {children}
    </h3>
  )
}

export default PanelSectionTitle

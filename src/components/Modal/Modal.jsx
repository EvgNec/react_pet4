import React from 'react'

export default function Modal({closeModal}) {

    const handlePressESC = (e) => {
    if (e.code==='Escape') {
        closeModal();
    }

    }


  return (
    <div>
      Modal
    </div>
  )
}



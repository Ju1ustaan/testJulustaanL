import React from 'react'

const Weeks = ({index}) => {
    const dayName = {
        0: 'Пн',
        1: '',
        2: 'Ср',
        3: '',
        4: 'Пт',
    }
  return (
    <div className='week'>{dayName[index]}</div>
  )
}

export default Weeks
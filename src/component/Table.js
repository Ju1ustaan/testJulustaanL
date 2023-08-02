import React from 'react'
import Cell from './Cell'
import Weeks from './Weeks'

const Table = () => {
    let weeks = []
    for(let i = 0; i < 7; i++){
        weeks = [...weeks, i]
    }
    let cells = []
    for(let i = 0; i < 357; i++){
        cells = [...cells, i]
    }
  return (
    <div className='table'>
        <div className='weeks__wrapper'>
        {
            weeks.map((_, index) => (<Weeks key={index} index={index}/>))
        }
        </div>
        <div className='cells__wrapper'>
        {
            cells.map((_, index) => <Cell key={index}/>)
        }
        </div>
    </div>
  )
}

export default Table
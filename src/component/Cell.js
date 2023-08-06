import React, { useState } from 'react'
import CellInfo from './CellInfo'


const Cell = ({ el, data }) => {
    const [cellInfo, setCellInfo] = useState(false)
    const openInfo = () => {
        cellInfo? setCellInfo(false): setCellInfo(true)
    }
    return (
        <>
            <div className='cell' onClick={() => {openInfo()}}>
                <span>{el}</span>
                {
                    cellInfo && <CellInfo setCellInfo={setCellInfo} data={data} el={el}/>
                }
            </div>

        </>
    )
}

export default Cell
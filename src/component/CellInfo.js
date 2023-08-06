import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'


const CellInfo = ({ setCellInfo, data, el }) => {

    return (
        <>
            <div className='cell-info' onClick={() => { setCellInfo(false) }}>
                <p className='cell-info__value'>{data[el] ? `${data[el]} contributions` : '0 contributions'}</p>
                <p className='cell-info__date'>{moment(el).format('dddd, MMMM D, YYYY')}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                    <path d="M4.5 6L0.169873 1.38009e-07L8.83013 8.95112e-07L4.5 6Z" fill="black" />
                </svg>
            </div>

        </>
    )
}

export default CellInfo
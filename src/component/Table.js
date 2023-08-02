import React from 'react'
import Cell from './Cell'
import Weeks from './Weeks'
import Mounth from './Mounth'

const Table = ({data}) => {
    // создаю массив для месяцев
    let mounth = []
    for (let i = 0; i < 12; i++) {
        mounth = [...mounth, i]
    }

    // так же создаю массив для недели
    let weeks = []
    for (let i = 0; i < 7; i++) {
        weeks = [...weeks, i]
    }

    // тут немного иначе но смысл такой же, создаю массив где элементом будет 
    // даты, итерация начнеися с 1 индекса так как начальная дата поподает во вторник 
    let cells = []
    for (let i = 0; i < 357; i++) {
        if(i > 0) {
            cells = [...cells, Object.keys(data)[i]]
        }else{
            cells = [...cells, i]
        }
    }

    return (
        <div className='table'>
            <div className='container'>
            <div className='mounth__wrapper'>
                {
                    mounth.map((_, index) => <Mounth key={index} index={index}/>)
                }
            </div>
            <div className='wrapper'>
                <div className='weeks__wrapper'>
                    {
                        weeks.map((_, index) => <Weeks key={index} index={index} />)
                    }
                </div>
                <div className='cells__wrapper'>
                    {
                        cells.map((el, index) => <Cell el={el} data={data} key={index}/>)
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

export default Table
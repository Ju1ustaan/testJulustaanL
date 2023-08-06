import React from 'react'
import Cell from './Cell'
import Weeks from './Weeks'
import Mounth from './Mounth'
import moment from 'moment/moment'

const Table = ({ data }) => {
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

    // создаю массив с ячейками значение которых будет дата

    const startDate = new Date('2022-05-30');
    const endDate = new Date('2023-05-21');

    const cellDate = [];

    for (let endDateCopy = new Date(startDate); endDateCopy <= endDate; endDateCopy.setDate(endDateCopy.getDate() + 1)) {
        cellDate.push(endDateCopy.toISOString().slice(0, 10));
        
    }


    let items = Array.from(document.querySelectorAll('.cell'))

    items.map((el) => {
        if (data[el.lastChild.innerText] > 0 && data[el.lastChild.innerText] < 10) {
            el.style.backgroundColor = 'rgba(172, 213, 242, 1)'
        } else if (data[el.lastChild.innerText] < 20) {
            el.style.backgroundColor = 'rgba(127, 168, 201, 1)'
        } else if (data[el.lastChild.innerText] < 30) {
            el.style.backgroundColor = 'rgba(82, 123, 160, 1)'
        } else if (data[el.lastChild.innerText] >= 30) {
            el.style.backgroundColor = 'rgba(37, 78, 119, 1)'
        } else {
            el.style.backgroundColor = '#EDEDED'
        }
    })



    return (
        <div className='table'>
            <div className='container'>
                <div className='mounth__wrapper'>
                    {
                        mounth.map((_, index) => <Mounth key={index} index={index} />)
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
                            cellDate.map((el, index) => <Cell el={el} key={index} data={data}/>)
                        }
                    </div>
                </div>
                <div className='suuport__wrapper'>
                    <p className='suuport__text'>Меньше</p>
                    <div className='suuport__cell1 suuport__cell'></div>
                    <div className='suuport__cell2 suuport__cell'></div>
                    <div className='suuport__cell3 suuport__cell'></div>
                    <div className='suuport__cell4 suuport__cell'></div>
                    <div className='suuport__cell5 suuport__cell'></div>
                    <p className='suuport__text'>Больше</p>
                </div>
            </div>
        </div>
    )
}

export default Table
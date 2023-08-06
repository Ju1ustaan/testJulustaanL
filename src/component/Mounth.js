import React from 'react'

const Mounth = ({index}) => {
    const mounthName = { 
        0: 'Июнь',
        1: 'Июль',
        2: 'Авг.',
        3: 'Сент.',
        4: 'Окт.',
        5: 'Нояб.',
        6: 'Дек.',
        7: 'Янв.',
        8: 'Февр.',
        9: 'Март',
        10: 'Апр.',
        11: 'Май',
    }
  return (
    <div className='mounth'>{mounthName[index]}</div>
  )
}

export default Mounth
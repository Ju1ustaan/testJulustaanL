import React from 'react'

const Mounth = ({index}) => {
    const mounthName = {
        0: 'Апр.',
        1: 'Май',
        2: 'Июнь',
        3: 'Июль',
        4: 'Авг.',
        5: 'Сент.',
        6: 'Окт.',
        7: 'Нояб.',
        8: 'Дек.',
        9: 'Янв.',
        10: 'Февр.',
        11: 'Март',
    }
  return (
    <div className='mounth'>{mounthName[index]}</div>
  )
}

export default Mounth
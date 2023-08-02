import React from 'react'

const Cell = ({ el, data }) => {
    console.log(data[el]);
    // в этом компоненте что то пошло не так, но я уверен что мог бы найти выход
    return (
        // временно вывел значения Contribution
        <div className='cell'>{data[el]}</div>
    )
}

export default Cell

// это вариант с иф элсом
// if(data[el] > 0 && data[el] < 10){
//     item.style.backgroundColor = 'rgba(172, 213, 242, 1)'
// }else if(data[el] < 20){
//     item.style.backgroundColor = 'rgba(127, 168, 201, 1)'
// }else if(data[el] < 30){
//     item.style.backgroundColor = 'rgba(127, 168, 201, 1)'
// }else if(data[el] >= 30){
//     item.style.backgroundColor = 'rgba(37, 78, 119, 1)'
// }else{
//     item.style.backgroundColor = '#EDEDED'
// }


// тут я пробовал свитч кейсом
// switch (true) {
//     case data[el] > 0 && data[el] < 10:
//         item.style.backgroundColor = 'rgba(172, 213, 242, 1)';
//         break;
//     case data[el] < 20:
//         item.style.backgroundColor = 'rgba(127, 168, 201, 1)';
//         break;
//     case data[el] < 30:
//         item.style.backgroundColor = 'rgba(127, 168, 201, 1)';
//         break;
//     case data[el] >= 30:
//         item.style.backgroundColor = 'rgba(37, 78, 119, 1)';
//         break;
//     default:
//         item.style.backgroundColor = '#EDEDED';
//         break;
// }
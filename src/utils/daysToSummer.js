import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const DaysToSummer = (props) =>{
    const {days, description} =props;
const countToSummer =()=>{
    const currentDate = new Date();
    const startSummer = new Date(`${currentDate.getUTCFullYear()}-06-21T00:00:00.00Z`);
    const endSummer = new Date(`${currentDate.getUTCFullYear()}-09-23T00:00:00.00Z`);
if (currentDate.valueOf()>=startSummer.valueOf() && 
currentDate.valueOf() <=endSummer.valueOf()){
    return null;
} else if (currentDate.valueOf() <= startSummer.valueOf()) {
    return Math.ceil((startSummer.valueOf() - currentDate.valueOf()) / (24 * 60 * 60 * 1000));
} else if (currentDate.valueOf() >= startSummer.valueOf()){
    const nextSummer = newDate(`${currentDate.getUTCFullYear()+1}-06-21T00:00:00.000Z`)
    return Math.ceil((nextSummer.valueOf()-currentDate.valueOf))/ (24 * 60 * 60 * 1000);
}
};
const daysLeft = countToSummer();
return(
    daysLeft === 0 ? null :
<div>
    <h1 className={'styles.title'}>
    <span className={styles.number}>{daysLeft}</span>
    <span classname={styles.days}>{days}</span>
        <span className={styles.description}>{description} </span>
    </h1>
</div>
);
}


export default DaysToSummer;
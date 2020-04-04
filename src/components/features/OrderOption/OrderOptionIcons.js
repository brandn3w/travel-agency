import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import {formatPrice}  from '../../../utils/formatPrice';


const OrderOptionIcons = ({ values, required, currentValue, setOptionValue }) => (


  <div className={styles.icon}>
    {required ? '' : (
      <div
        className={styles.icon}
        value={currentValue}
        onChange={() => setOptionValue('')}
      >
        <Icon name={'times-circle'} />
        none
      </div>
    )}

    {values.map(value => (

      <div
        className={currentValue === value.id ? styles.iconActive : styles.icon}
        key={value.id}
        value={value.id}
        onClick={() => (setOptionValue(value.id))}
      >
        <Icon className={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  name: PropTypes.string,
  values: PropTypes.array,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};



export default OrderOptionIcons;


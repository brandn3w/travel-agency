import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';



const OrderSummary =({cost, options})=> (
    <h2 className={styles.component}>Total <strong>
            ${calculateTotal(formatPrice(cost), options)}
            </strong>
            </h2>
);

OrderSummary.propTypes = {
    cost: PropTypes.string,
    options: PropTypes.object,
  };

export default OrderSummary;
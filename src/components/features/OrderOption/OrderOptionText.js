import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption.scss';


const OrderOptionText = ({ setOptionValue }) => (

    <div className={styles.text}>
        <input required
            type='text'
            className={styles.input}

            onChange={event => setOptionValue(event.currentTarget.value)}
        />

    </div>
);
OrderOptionText.propTypes = {
    setOptionValue: PropTypes.any,
};

export default OrderOptionText;
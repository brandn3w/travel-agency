import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {
    static propTypes = {
      setOptionValue: PropTypes.any,
    }
    constructor(props) {
      super(props);
      this.state = {
        startDate: new Date(),
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(date) {
      const {setOptionValue} = this.props;
      this.setState({
        startDate: date,
      });
      setOptionValue(date);
    }
  
    render() {
      return (
        <DatePicker className={styles.input}
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      );
    }
}

export default OrderOptionDate;
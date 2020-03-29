import React from 'react';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

const OrderForm = props => (

<Grid>
  <Row>
    <Col xs={12}>
      <PageTitle text='Trip options' />
      <OrderSummary cost ={props.tripCost} options={props.options}/>
    </Col>
  </Row>
</Grid>

);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
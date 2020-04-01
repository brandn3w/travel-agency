import React from 'react';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing';
import OrderOption from '../OrderOption/OrderOption';
import PageTitle from '../../common/PageTitle/PageTitle';

const OrderForm = props => (

  <Grid>
    <Row>
      <Col xs={12}>
        <PageTitle text='Trip options' />
        <OrderSummary cost={props.tripCost} options={props.options} />
        {pricing.map(option =>
          <Col key={option.id} md={4}>
            <OrderOption {...option} />
          </Col>)}
      </Col>
    </Row>
  </Grid>

);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
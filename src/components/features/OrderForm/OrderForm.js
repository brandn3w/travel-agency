import React from 'react';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing';
import OrderOption from '../OrderOption/OrderOption';
import PageTitle from '../../common/PageTitle/PageTitle';

const OrderForm = ({ options, tripCost, setOrderOption }) => (
      <Grid>
      <Row>
        {pricing.map(option => (
          <Col key={option.id} md={4}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
          </Col>
        ))}

        <Col xs={12}>
          <PageTitle text='Trip options' />
          <OrderSummary cost={tripCost} options={options} />
        </Col>
      </Row>
    </Grid>

  );

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
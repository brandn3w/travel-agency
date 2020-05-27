import React from 'react';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing';
import OrderOption from '../OrderOption/OrderOption';
import PageTitle from '../../common/PageTitle/PageTitle';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';


const sendOrder = (options, tripCost, tripId, tripName, tripCountry) => {
console.log(options);
  let allFilledIn = true;
  if(options.contact ===''){
    allFilledIn = false;
    alert('Contact info is required');  
  }else if
    (options.name===''){
      allFilledIn = false;
      alert('Name is required');
    } else {
  
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    tripCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};
};
const OrderForm = ({ options, tripCost, setOrderOption, tripName, tripId, countryCode }) => (
      <Grid>
      <Row className = {StyleSheet.component}>
        {pricing.map(option => (
          <Col key={option.id} md={4}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
          </Col>
        ))}

        <Col xs={12}>
          <PageTitle text='Trip options' />
          <OrderSummary cost={tripCost} options={options} />
          <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode)}>Order now!</Button>

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
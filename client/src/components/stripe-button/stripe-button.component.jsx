import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JGO8pLEd7HTa65MIdIQeaU2wxjkETAfncKCa4LKSt8BXSBu4lZ6xfys2YSaJqNp3GXxZB9pmGoywrBYIthEZZAR00P9LEdjwE';

    const onToken = token => {
        axios({ 
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful');
        }).catch(error => {
            console.log('Payment error: ', error);
            alert(
                'There was an issue with your payment. Pplease ensure you use the provided credit card.'
            );
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
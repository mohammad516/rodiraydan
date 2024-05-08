import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CartContext } from '../../_context/CartContext';
import CartApis from '../../_utils/CartApis';
import OrderApis from '../../_utils/OrderApis';
const CheckoutForm = ({amount}) => {
    const{cart, setCart} = useContext(CartContext)
    const stripe = useStripe();
    const elements = useElements();
    const [loading,setLoading]=useState(false);
    const [error,setErrorMessage]=useState()
  
    const handleSubmit = async (event) => {
      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
      const handleError = (error)=>{
        setLoading(false)
        setErrorMessage(error.message)
      }
      createOrder();
       // Trigger form validation and wallet collection
  const {error: submitError} = await elements.submit();
  if (submitError) {
    handleError(submitError);
    return;
  }
      const res = await fetch('api/create-intent', {
        method:'POST',
        body: JSON.stringify({
            amount: amount
        })
      })
      const clientSecret = await res.json()
      const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        clientSecret,
        elements,
        confirmParams: {
          return_url: "https://rodiraydan.vercel.app/payment-confirm",
        },
      });
  
      if (result.error) {
        // Show error to your customer (for example, payment details incomplete)
        console.log(result.error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    };
    const createOrder = () => {
      let productIds = [];
      cart.forEach(el => {
        productIds.push(el?.product?.id)
      })
      const data = {
        data: {
          amount,
          products: productIds
        }
      }
      OrderApis.createOrder(data).then((res) => {
        if (res) {
          cart.forEach(el => {
            CartApis.deleteCartItem(el?.id).then(result => {
  
            })
          })
        }
      })
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="tw-mx-12 md:mx-[320px] tw-mt-14 tw-mb-12">
        <PaymentElement />
        <button className='tw-w-full tw-p-2 tw-mt-4 tw-text-white tw-rounded-md tw-bg-cyan-700'>Submit</button>
      </div>

    </form>
  );
};

export default CheckoutForm;

import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useDispatch, useSelector } from 'react-redux';
import { PaystackButton } from 'react-paystack'
import '../../app.css';
import { Divider } from '@material-ui/core';

export default function BookDevPayment({setIsOpen}) {
  const [selectedValue, setSelectedValue] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  // const publicKey = process.env.PAYSTACK_PUBLIC_KEY;
  const publicKey = 'pk_test_41be8d2866325ed0e9bcf8734f6d31706640d968';
  const amount = 500000
  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.name)
  const [phone, setPhone] = useState("0292083118")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      // phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      setIsOpen(false);
      alert("You have successfully booked a dev😁!");
    },
    onClose: () => alert("Wait! Don't leave :("),
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Make your payment now to secure your sit for the session
        <Divider />
      </Typography>
      <PaystackButton {...componentProps} className="paystack-button"/>
      <Divider />
    </React.Fragment>
  );
}
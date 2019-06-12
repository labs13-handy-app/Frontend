

import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

  

const ranges = [
  {
    value: '1-2',
    label: '1 to 2',
  },
  {
    value: '3-4',
    label: '3 to 4',
  },
  {
    value: '5-6',
    label: '5 to 6',
  },
];
const useStyles = withStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },

  roots: {
    // display: ‘flex’,
  },
  formControls: {
    margin: theme.spacing(3),
  },
  groups: {
    margin: theme.spacing(1, 0),
  },
 }));




export default function AddBid() {
  const classes = withStyles();
  const [values, setValues] = React.useState({
    price: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  
  });
  
  const [value, setValue] = React.useState('yes');

  function handleChanges(event) {
    setValue(event.target.value) ;
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div>
    <div className={classes.root}>
      <TextField
        id="outlined-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Project Completion"
        InputProps={{
          startAdornment: <InputAdornment position="start">Day's</InputAdornment>,
        }}
      />
      <TextField
        select
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Time"
        value={values.calendar }
        onChange={handleChange('calendar')}
        InputProps={{
          startAdornment: <InputAdornment position="start">Week's</InputAdornment>,
        }}
      >  
        {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-adornment-price"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="price"
        value={values.price}
        onChange={handleChange('price')}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      {/* <TextField
        id="outlined-adornment-weight"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Weight"
        value={values.weight}
        onChange={handleChange('weight')}
        helperText="Weight"
        InputProps={{
          endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
        }} */}
      />
      <TextField
        id="outlined-adornment-password"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        type={values.showPassword ? 'text' : 'password'}
        label="Password"
        value={values.password}
        onChange={handleChange('password')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
/>

{/* Button Component Section */}

    </div>
    <div className={classes.roots}> 

 <FormControl component="fieldset" className={classes.formControls}>
 <FormLabel component="legend">Material Included</FormLabel>
 <RadioGroup
   aria-label="Material included"
   name="Material Included"
   className={classes.groups}
   value={value}
   onChange={handleChanges}
 >
   <FormControlLabel value="yes" control={<Radio />} label="Yes" />
   <FormControlLabel value="no" control={<Radio />} label="No" />
 </RadioGroup>
</FormControl>
<FormControl component="fieldset" className={classes.formControls}>
 <RadioGroup
   aria-label="Material-Included"
   name="Material-Included"
   className={classes.groups}
   value={value}
   onChange={handleChanges}
 >
  
   </RadioGroup>
</FormControl>



</div>


</div>
);
}
// Button Component End

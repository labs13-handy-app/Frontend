

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
import Button from '@material-ui/core/Button';


  

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

  
  });
  
  const [value, setValue] = React.useState('yes');

  function handleChanges(event) {
    setValue(event.target.value) ;
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
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
        label="TIME"
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
        label="PRICE"
        value={values.price}
        onChange={handleChange('price')}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
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

{/* before push always pull */}


</div>

<Button variant="contained" color="primary">
Submit
</Button>

</div>







);
}
// Button Component End

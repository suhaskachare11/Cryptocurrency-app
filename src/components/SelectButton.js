import { makeStyles } from '@material-ui/styles';
import React from 'react';

const SelectButton = ({children, selected, onClick}) => {
    const useStyles= makeStyles(()=>({
       selectbutton:{
          border:'1px ssolid gold',
          borderRadius:5,
          padding:10,
          paddingRight:20,
          paddingLeft:20,
          fontFamily:'Montserrat',
          cursor:'pointer',
          backgroundColor: selected ? 'gold' : '',
          color: selected ? 'black' : '',
          fontWeight:selected ? 700:500,
          '&:hover':{
            backgroundColor:'gold',
            color:'black'
          },
          width:'22%'
       }
    }))

    const classes= useStyles();
  return (
      <span onClick={onClick} className={classes.selectbutton}>{children}</span>
  )
};

export default SelectButton;

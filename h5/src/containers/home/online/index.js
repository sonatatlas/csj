
// offline.js

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid'

//css
import styles from './styles'

///images
import star from './icon/u692.png'
import order from './icon/u694.png'
import cart from './icon/u696.png'

import Divider from './divider'
import AutoComplete from './autoComplete'

const SimpleCard = (props) =>{
  const { classes } = props;
  return (
	  <div className={classes.root}>
	  <Card className={classes.card}><CardContent>
	  
	  <Grid className={classes.gridList} style={{marginTop:10}}>
	  <Grid item xs={4} className={classes.cardBtnWrap}><Button
      disableFocusRipple={true} className={classes.cardBtn}
      disableRipple={true} onClick={()=>alert('aa')}>
	  <Grid item>
	  <img style={{width:42, height:42, marginTop:3}} src={ cart } alt="扫码付款" />
	  <Grid item style={{color:'#fff'}}>购物车</Grid>
	  </Grid></Button></Grid>
	  
	  <Grid item xs={4} className={classes.cardBtnWrap}><Button
      disableFocusRipple={true} className={classes.cardBtn}
      disableRipple={true} onClick={()=>alert('aa')}>
	  <Grid item>
	  <img style={{width:42,height:42,marginTop:3}}
      className={classes.cardImg} src={ order } alt="扫码点单" />
	  <Grid item style={{color:'#fff'}}>订单</Grid>	  
	  </Grid></Button></Grid>

	  <Grid item xs={4} className={classes.cardBtnWrap}><Button
      disableFocusRipple={true} className={classes.cardBtn}
      disableRipple={true} onClick={()=>alert('aa')}>
	  <Grid item>
	  <img style={{width:42,height:41, marginTop:4}} src={ star } alt="扫码付款" />
	  <Grid item style={{color:'#fff'}}>关注</Grid>
	  </Grid></Button></Grid>
      
      </Grid></CardContent></Card>
	  <AutoComplete />
	  < Divider />
	  </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);




// offline.js

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

//css
import styles from './styles'

///images
import _avatar from './icon/1.jpeg'

import Divider from './divider'

const SimpleCard = (props) =>{
  const { classes } = props;
  return (
	  <div className={classes.root}>
	  <Card className={classes.card}><CardContent>
	  <Grid container spacing={8}>
	  <Grid style={{margin:10}}><Avatar alt="Remy Sharp" src={_avatar} className={classes.avatar} /></Grid>
	  <Grid style={{marginLeft:0,margin:10}}><Grid><Typography type="subheading">房小超</Typography></Grid>
	  <Grid><Typography type="caption">以为您节省888元</Typography></Grid></Grid>
	  <Grid item style={{flex:1}}>
	  <Typography type="caption" align="right">至尊会员</Typography></Grid>
	  </Grid>
	  <Typography style={{color:'#fff',marginTop:28}}
      type="subheading" align="center">8888 8888 8888</Typography>	  
	  </CardContent></Card>
	  
	  <Button disableRipple={true} raised className={classes.cutBtn}>付款买单！点我优惠！</Button>

	  < Divider />
	  </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);



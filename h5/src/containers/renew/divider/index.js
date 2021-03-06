import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import createHistory from 'history/createBrowserHistory'

const styles = theme => ({
    root: {
	width: '100%',
	marginTop:15,
	height:300,
	background: theme.palette.background.paper,
	overflow: 'auto'
    },
});

const history = createHistory()

const go = (page) => {
    history.push('/'+ page )
    history.go(0)
}

function ListDividers(props) {
    const { classes } = props;
    return (
	    <List className={classes.root}>
	    <ListItem button onClick={()=>go('redpacket')}>
            <ListItemText primary="专属红包" secondary="支付用红包，畅享最优惠" />
	    </ListItem>
	    <Divider light />
	    <ListItem button onClick={()=>go('special')}>
            <ListItemText primary="专享特价" secondary="专属会员的生活小确幸" />
	    </ListItem>
	    <Divider />
	    <ListItem button onClick={()=>go('certificate')} >
            <ListItemText primary="领券中心" secondary="吃喝玩乐，领券再说" />
	    </ListItem>
	    <ListItem button onClick={()=>go('renew')} >
            <ListItemText primary="续费管理" secondary="到期时间: 2018/2/11" />
	    </ListItem>
	    <ListItem button onClick={()=>go('traderecord')} >
            <ListItemText primary="交易记录" secondary="日子就得精打细算" />
	    </ListItem>
	    <ListItem button onClick={()=>go('vipsettings')} >
            <ListItemText primary="设置管理" secondary="资料/支付/地址" />
	    </ListItem>	    	    
	    </List>
    );
}

ListDividers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);

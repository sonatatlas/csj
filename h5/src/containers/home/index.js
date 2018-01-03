
// containers/home.js
import React from 'react';
import PropTypes from 'prop-types';
//material-ui
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
//swipe
import SwipeableViews from 'react-swipeable-views';
//style
import styles from './styles.js'
// link-containers
import Offline from './offline'
import Online from './online'
import Vip from './vip'

function TabContainer({ children, dir }) {
    return (
	    <Typography component="div" dir={dir} style={{ padding: 2 }}>
	    {children}
	</Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};


class FullWidthTabs extends React.Component {
    state = {
	value: 1,
    };
    
    handleChange = (event, value) => {
	this.setState({ value });
    };

    handleChangeIndex = index => {
	this.setState({ value: index });
    };

    render() {
	const { classes, theme } = this.props;
	return (
		<div className={classes.root} xs={12}>
		<SwipeableViews 
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value} onChangeIndex={this.handleChangeIndex}
		>
		<TabContainer children={ <Vip /> } dir={theme.direction}></TabContainer>
		<TabContainer children={ <Offline /> } dir={theme.direction} />
		<TabContainer children={ <Online /> } dir={theme.direction} />
		</SwipeableViews>		
		<AppBar classes={{positionFixed:classes.appBarPositionFixed}} color="default">
		<Tabs value={this.state.value} onChange={this.handleChange} centered ={true}
            indicatorColor="" textColor="primary" fullWidth >
		<Tab fullWidth className={classes.tab1} label="会员卡" />
		<Tab fullWidth className={classes.tab2} label="线下" />
		<Tab fullWidth className={classes.tab3} label="线上" />
		</Tabs>
		</AppBar>
		</div>
	);
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);

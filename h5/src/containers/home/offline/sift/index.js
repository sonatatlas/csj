import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';


import category1 from './icon/u524.png';
import category2 from './icon/u530.png';
import category3 from './icon/u532.png';

import styles from './styles'

function TabContainer(props) {
    return (
	    <Typography component="div" style={{ padding: 8 }}>
	    {props.children}
	</Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


class BasicTabs extends React.Component {
    state = {
	value: 0,
    };

    handleChange = (event, value) => {
	this.setState({ value });
    };

    render() {
	const { classes } = this.props;
	const Divider = this.props.divider
	const { value } = this.state;
	const Icon = ({category})=>(
		<img alt={category} className={classes.category} src={category} />
	)
	return (
		<div>
		<AppBar position="static" color="inherit">
		<Tabs
	    value={value} centered={true} fullWidth onChange={this.handleChange}
	    indicatorColor="#42A5F5" 
		>
		<Tab classes={{root:classes.tab}} disableRipple={true} icon={ <Icon category={category3} />} />
		<Tab classes={{root:classes.tab}} disableRipple={true} icon={ <Icon category={category2} />} />
		<Tab classes={{root:classes.tab}} disableRipple={true} icon={ <Icon category={category3} />} />
		<Tab classes={{root:classes.tab}} disableRipple={true} icon={ <Icon category={category2} />} />
		<Tab classes={{root:classes.tab}} disableRipple={true} icon={ <Icon category={category3} />} />
		</Tabs>
		</AppBar>
		{value === 0 && <TabContainer children={<Divider />} />}
            {value === 1 && <TabContainer children={<Divider />} /> }
            {value === 2 &&  <TabContainer children={<Divider />} /> }
            {value === 3 && <TabContainer children={<Divider />} /> }
            {value === 4 && <TabContainer children={<Divider />} /> }
	    </div>
	);
    }
}

BasicTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTabs);

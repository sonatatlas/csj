import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
//

import Shop from './shop'
import Common from './common'

function TabContainer(props) {
    return (
	    <Typography component="div" style={{ padding: 8 * 3 }}>
	    {props.children}
	</Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {

    },
});

class BasicTabs extends React.Component {
    state = {
	value: 0,
    };

    handleChange = (event, value) => {
	this.setState({ value });
    };

    render() {
	const { classes } = this.props;
	const { value } = this.state;

	return (
		<div className={classes.root}>
		<AppBar position="static" color="default" >
		<Tabs
	    value={value} onChange={this.handleChange}
	    indicatorColor="#ffca40" 
	    fullWidth centered
		>
		<Tab label="通用红包" />
		<Tab label="店铺红包" />
		</Tabs>
		</AppBar>
		{value === 0 && <TabContainer children={<Shop />} /> }
		{value === 1 && <TabContainer children={<Common />} /> }	    
	    </div>
	);
    }
}

BasicTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTabs);

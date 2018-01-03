import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider'
import Grid from 'material-ui/Grid'
const styles = theme => ({
    root: theme.mixins.gutters({
	paddingTop: 16,
	paddingBottom: 16,
	marginTop: theme.spacing.unit ,
    }),
});

function PaperSheet(props) {
    const { classes } = props;
    return (
	    <div>
	    <Paper className={classes.root} elevation={4}>
	    <Grid container>
	    <Grid item xs={6}>
            <Typography gutterBottom type="subheading">华润万家(汶水路店)</Typography>
            <Typography gutterBottom type="caption">线下买单/点餐享用</Typography>
	    </Grid>
	    <Grid item xs={6}>
            <Typography align="right" color="accent" gutterBottom type="headline">￥8</Typography>
            <Typography align="right" gutterBottom type="caption">满10元可用</Typography>
	    </Grid>
	</Grid>
	    <Divider />
            <Typography style={{marginTop:8}} type="caption">有效期至: 2018.02.01</Typography>

	    </Paper>
	    </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import { LinearProgress } from 'material-ui/Progress';

const styles = theme => ({
    root: theme.mixins.gutters({
	paddingTop: 16,
	paddingBottom: 16,
	margin: theme.spacing.unit * 3,
    }),
});

function PaperSheet(props) {
    const { classes } = props;
    const Rush = () => (
	    <Button raised color="accent" style={{marginTop:20}} >领取</Button>
    )
    return (
	    <div>
	    <Paper className={classes.root} elevation={4}>
	    <Grid container style={{marginBottom: 8}}>
	    <Grid item xs={6}>
            <Typography gutterBottom type="subheading">Mando Diao上海巡演现场票优惠券</Typography>
            <Typography color="accent" gutterBottom type="subheading">￥233</Typography>
	    </Grid>
	    <Grid item xs={6}>
            <Typography align="right" gutterBottom type="button" children={<Rush />} />
	    </Grid>
	</Grid>
	    <LinearProgress color="accent" mode="buffer" value={89} valueBuffer={30} />
	    <Typography align="right"
	gutterBottom style={{marginTop:10}} type="caption">已领:89%</Typography>

	    </Paper>
	    </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);

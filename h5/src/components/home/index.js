import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
      minWidth: 280,
      height: 150
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>Word of the Day</Typography>

        </CardContent>
        <CardActions>
          <Button dense>learn more</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);

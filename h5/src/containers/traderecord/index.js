import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
      background: theme.palette.background.paper,
  },
});

function FolderList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemText primary="Photos" secondary="Jan 9, 2016" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Work" secondary="Jan 7, 2016" />
        </ListItem>
      </List>
    </div>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);









































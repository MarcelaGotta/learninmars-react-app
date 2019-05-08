import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import { withStyles } from '@material-ui/core/styles';
import { BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = theme => ({
  root: {
		display: 'none',
		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
  },
});

class Footer extends Component {
	state = {
		value: 'recents'
	}

	handleChange = (event, value) => {
		this.setState({ value });
	}

  render() {
		const { classes } = this.props;
		const { value } = this.state;
    return (
      <div>
        <BottomNavigation value={value} onChange={this.handleChange} className={classes.root} >
        	<BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />}>a</BottomNavigationAction>		
					<BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        	<BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        	<BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>} />
        </BottomNavigation>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)

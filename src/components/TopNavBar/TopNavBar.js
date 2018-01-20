import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ContentAddIcon from 'material-ui/svg-icons/content/add';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class TopNavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
        <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <ContentAddIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
        <ToolbarGroup>
            <ToolbarTitle text="New Arrivals" />
            <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default TopNavBar;
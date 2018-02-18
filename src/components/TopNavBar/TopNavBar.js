import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ContentAddIcon from 'material-ui/svg-icons/content/add';
import SearchIcon from 'material-ui/svg-icons/action/search';
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
            <MenuItem primaryText="Electronics" />
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
            <MenuItem primaryText="Exciting Deals" />
          </IconMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <SearchIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Search Products" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default TopNavBar;
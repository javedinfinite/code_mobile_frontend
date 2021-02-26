import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment style={{backgroundColor : 'green'}}>
      {/* <Segment style={{backgroundColor : '#0a3438'}}> */}
        <Menu attached pointing secondary stackable inverted style={{borderColor:'transparent'}}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Scoial Friends'
            active={activeItem === 'Scoial Friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends of friends'
            active={activeItem === 'friends of friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='feature'
              active={activeItem === 'feature'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

 
      </Segment>
    )
  }
}

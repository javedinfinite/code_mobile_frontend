import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import '../App.css'


export default class Header extends Component {


  render() {

    return (
      <Menu  className='menu' inverted    >
        <Menu.Item
        >
         We are Findme
        </Menu.Item>

        <Menu.Item > 
          This is vehicle oction dashboard
        </Menu.Item>

        <Menu.Item className="menuclass"
        >
          Anything Else
        </Menu.Item>
      </Menu >
    )
  }
}
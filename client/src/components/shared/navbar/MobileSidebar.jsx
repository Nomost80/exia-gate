import React, { PureComponent } from 'react';
import { Responsive, Sidebar, Menu, Icon } from 'semantic-ui-react';
import Navigation from './Navigation';

class MobileSidebar extends PureComponent {
  state = {};

  handlePusherClick = () => this.setState({ opened: false });

  handleToggle = () => this.setState({ opened: !this.state.opened });

  render() {
    const { opened } = this.state;

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={opened}>
            <Navigation/>
          </Sidebar>
          <Sidebar.Pusher dimmed={opened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={this.handleToggle}>
                <Icon name='sidebar' />
              </Menu.Item>
            </Menu>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

export default MobileSidebar;
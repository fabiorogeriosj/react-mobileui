import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const ComponentLink = (props) => {
  return (
    <NavItem>
      <NavLink tag={Link} to={props.item.to} activeClassName="active">
        {props.item.name}
      </NavLink>
    </NavItem>
  );
};
const propTypes = {
  children: PropTypes.node
};

class Components extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Base',
          to: '/components/base/'
        }
      ]
    };
  }
  render() {
    return (
      <Container className="content">
        <Row>
          <Col md={{ size: 3, order: 2 }}>
            <div className="docs-sidebar mb-3">
              <h5>Components</h5>
              <Nav className="flex-column">
                {this.state.navItems.map((item, i) => {
                  return <ComponentLink key={i} item={item} />;
                })}
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap/issues/13"><small>Additional Components</small></NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col md={{ size: 9, order: 1 }}>
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}
Components.propTypes = propTypes;
export default Components;

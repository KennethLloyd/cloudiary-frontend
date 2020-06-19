import React from 'react';
import { connect } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from 'reactstrap';

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: 'All',
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  renderDropDown() {
    return (
      <div className="d-flex">
        <p>Mood:</p>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>{this.state.mood}</DropdownToggle>
          <DropdownMenu>
            {this.props.moods
              ? this.props.moods.map((mood) => {
                  return (
                    <DropdownItem key={mood._id}>{mood.name}</DropdownItem>
                  );
                })
              : ''}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }

  render() {
    return <Container>{this.renderDropDown()}</Container>;
  }
}

const mapStateToProps = (state) => {
  return { moods: state.moods.moods };
};

export default connect(mapStateToProps, null)(SearchFilter);

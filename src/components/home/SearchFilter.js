import React from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button, Label, Input } from 'reactstrap';

class SearchFilter extends React.Component {
  state = {
    mood: 'ALL',
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  renderDropDown() {
    return (
      <div className="d-flex align-items-center">
        <Label className="mt-auto mb-auto mr-2">Mood: </Label>
        <Input bsSize="sm" type="select" name="select">
          <option onClick={() => this.setState({ mood: 'ALL' })}>ALL</option>
          {this.props.moods
            ? this.props.moods.map(mood => {
                return (
                  <option
                    key={mood._id}
                    onClick={() => this.setState({ mood: mood.name })}
                  >
                    {mood.name}
                  </option>
                );
              })
            : ''}
        </Input>
      </div>
    );
  }

  renderSearch() {
    return (
      <Form
        className="inline my-2 my-lg-0 d-flex align-items-center"
        onClick={e => e.preventDefault()}
      >
        <Input
          size="sm"
          className="mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Button
          size="sm"
          outline
          color="secondary"
          className="my-2 my-sm-0 ml-2 ml-md-0"
          type="submit"
        >
          Search
        </Button>
      </Form>
    );
  }

  render() {
    return (
      <Container className="d-xs-flex d-md-flex justify-content-md-between mt-3">
        {this.renderDropDown()}
        {this.renderSearch()}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { moods: state.moods.moods };
};

export default connect(mapStateToProps, null)(SearchFilter);

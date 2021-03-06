import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Form, Button, Label, Input } from 'reactstrap';

const SearchFilter = (props) => {
  const moods = useSelector((state) => state.moods.moods);
  const [searchValue, updateSearchValue] = useState('');

  const renderDropDown = () => {
    return (
      <div className="d-flex align-items-center">
        <Label className="mt-auto mb-auto mr-2">Mood: </Label>
        <Input
          bsSize="sm"
          type="select"
          onChange={(e) => {
            props.updateMood(e.target.value);
          }}
        >
          <option>ALL</option>
          {moods
            ? moods.map((mood) => {
                return (
                  <option key={mood._id}>{mood.name.toUpperCase()}</option>
                );
              })
            : ''}
        </Input>
      </div>
    );
  };

  const renderSearch = () => {
    return (
      <Form
        className="inline my-2 my-lg-0 d-flex align-items-center"
        onClick={(e) => e.preventDefault()}
      >
        <Input
          bsSize="sm"
          className="mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchValue}
          onChange={(e) => updateSearchValue(e.target.value)}
          onBlur={() => (searchValue === '' ? props.updateSearchKey('') : '')}
        />
        <Button
          size="sm"
          color="secondary"
          className="my-2 my-sm-0 ml-2 ml-md-0"
          type="submit"
          onClick={() => props.updateSearchKey(searchValue)}
        >
          Search
        </Button>
      </Form>
    );
  };

  return (
    <Container className="d-xs-flex d-md-flex justify-content-md-between mt-3">
      {renderDropDown()}
      {renderSearch()}
    </Container>
  );
};

export default SearchFilter;

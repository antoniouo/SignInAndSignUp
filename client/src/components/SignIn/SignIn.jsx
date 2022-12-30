import React, { useState } from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../Redux/actions/userActions';

export default function SignIn() {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signInUser(input));
  };

  const arr = [
    { type: 'text', name: 'email', placeholder: 'email', onChange: inputHandler, value: input.email || '' },
    { type: 'password', name: 'password', placeholder: 'password', onChange: inputHandler, value: input.password || '' },
  ];
  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          {arr.map((el) => (
            <FormGroup>
              <Label>{el.name}</Label>
              <Input {...el} />
            </FormGroup>
          ))}
          <Button type="submit" disabled={!((input.email && input.password))}> send </Button>
        </Form>
      </Col>
    </Row>
  );
}

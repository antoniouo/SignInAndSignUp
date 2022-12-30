import axios from 'axios';
import React, { useState } from 'react';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { userSignUp } from '../../Redux/actions/userActions';

export default function SignUp() {
  const [input, setInput] = useState({});
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.name && input.password && input.email) {
      dispatch(userSignUp(input));
      setInput({});
    }
  };
  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label>Login</Label>
            <Input
              type="text"
              name="name"
              onChange={inputHandler}
              value={input.name || ''}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              onChange={inputHandler}
              value={input.email || ''}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              onChange={inputHandler}
              value={input.password || ''}
            />
          </FormGroup>
          <Button type="submit">Ok</Button>
        </Form>
        {error && <p> Что то пошло не так</p>}
      </Col>
    </Row>
  );
}

import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MyNavBar from './components/MyNavBar/MyNavBar';
import PostPage from './components/PostPage/PostPage';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import { userCheck } from './Redux/actions/userActions';
import AuthUser from './components/RequireAuth/AuthUser';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCheck());
  }, []);

  return (
    <Container>
      <>
        <MyNavBar />

        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route
            path="/SignUp"
            element={(
              <AuthUser>
                <SignUp />
              </AuthUser>
        )}
          />
          <Route
            path="/SignIn"
            element={(
              <AuthUser>
                <SignIn />
              </AuthUser>
        )}
          />
        </Routes>
      </>

    </Container>

  );
}

export default App;

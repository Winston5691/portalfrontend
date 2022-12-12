import React, {useRef,useState} from 'react';
import './Login.css';
import logo from '../images/logo.jpg';
import { Link, useHistory } from 'react-router-dom';

function LoginS() {
  const baseApiUrl = 'http://localhost:4000';
  const history = useHistory();
  const [email, setEmail] = useState()
  const [password, setPass] = useState()
  const emailRef = useRef();
  const passwordRef = useRef();
  function attemptLogin(e) {
    e.preventDefault();

    console.log('LOgin Attempt');

    // let authFails = false;
    // if (authFails) {
    //   console.log('back to login');
    //   // return <Redirect to='/login'  />
    //   history.push('/login');
    // }
    // return <Redirect to='/signup'  />
    history.push('/Student');
    function handleAddItem(newUser) {
      // setItems([...items, newItem]);
      setEmail(emailRef.current.value);
      setPass(passwordRef.current.value);
    }
    fetch(`${baseApiUrl}/users/sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((r) => r.json())
      .then((newUser) => handleAddItem(newUser));
  }
 


  return (
    <div className='main'>
      <div className='sub-main'>
        <div className='image'>
          <div className='image-container'>
            <img src={logo} alt='profile' className='profile'></img>
          </div>
          <div>
            <h1 id='login'>LOG IN</h1>

            <form>
              <div class='form-group'>
                {/* <label for="exampleInputEmail1">Email</label> */}
                <input
                  type='email'
                  class='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='student email'
                  className='textfield'
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div class='form-group'>
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input
                  type='password'
                  class='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                  className='textfield'
                  onChange={(e)=>setPass(e.target.value)}
                />
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <div class='form-check'>
                    <label
                      class='form-check-label'
                      for='exampleCheck1'
                      id='remember'
                    >
                      {' '}
                      <input
                        type='checkbox'
                        class='form-check-input'
                        id='exampleCheck1'
                      />{' '}
                      Remember
                    </label>
                  </div>
                </div>

                <div className='col-md-6'>
                  <h4 id='forgotpass'>
                    {' '}
                    <Link to='/Enroll'>Forgot your password?</Link>{' '}
                  </h4>
                </div>
              </div>
              <button
                type='submit'
                class='btn btn-light'
                className='login-button'
                onClick={attemptLogin}
              >
                Log In
              </button>
            </form>
            <div>
              <h4 id='newmbr'>
                {' '}
                New member?{' '}
                <Link to='/Enroll' id='create-acc'>
                  {' '}
                  Create Account
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginS;

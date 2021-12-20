import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { faSpinner, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import './resetpassword.css';
import { useParams } from 'react-router-dom';
// import HeaderBar from './components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const headerStyle = {
  background:
  'linear-gradient(90deg, rgba(0,140,186,1) 0%, rgba(50,192,238,1) 50%, rgba(215,244,249,1) 100%)',
  color: 'white',
};

const loading = {
  margin: '1em',
  fontSize: '24px',
};

const title = {
  pageTitle: 'UBAdemy - Password Recovery',
};

const formStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
};

export default function ResetPassword() {
  const [data, setData] = useState({
    password: '',
    updated: false,
    isLoading: false,
    error: false,
  });
  const [passwordShown, setPasswordShown] = useState({ show: false, icon: faEye });
  const { userId, token } = useParams();

  const handleChange = (event) => {
    setData({ ...data, password: event.target.value });
  };

  const updatePassword = async (e) => {
    console.log('updating pwd');
    e.preventDefault();
    setData({ ...data, isLoading: true });
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_GATEWAY_URL}/authentication/password/${userId}/${token}`,
        {
          password: data.password,
        },
      );
      if (response.status === 200) {
        setData({
          ...data, updated: true, error: false, isLoading: false,
        });
        axios.patch(`${process.env.REACT_APP_GATEWAY_URL}/users/${userId}`, { passwordChanged: 1 }, { headers: { authorization: token }});
      } else {
        setData({
          ...data, updated: false, error: true, isLoading: false,
        });
      }
    } catch (error) {
      setData({
        ...data, updated: false, error: true, isLoading: false,
      });
    }
  };

  const togglePassword = () => {
    const icon = passwordShown.show ? faEye : faEyeSlash;
    setPasswordShown({ show: !passwordShown.show, icon });
  };

  return (
    <div>
      <div className="header">
        <AppBar position="static" color="default" style={headerStyle}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              {title.pageTitle}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      {!data.updated && !data.error && (
        <form className="password-form" onSubmit={updatePassword} style={formStyle}>
          <TextField
            id="password"
            label="New password"
            onChange={handleChange}
            value={data.password}
            type={passwordShown.show ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton onClick={togglePassword}>
                    <FontAwesomeIcon icon={passwordShown.icon} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button type="submit" className="button" disabled={data.isLoading}>
            {data.isLoading && (
            <FontAwesomeIcon icon={faSpinner} style={{ marginRight: '10px' }} spin />
            )}
            {data.isLoading && <span>Loading...</span>}
            {!data.isLoading && <span>Reset password</span>}
          </button>
        </form>
      )}
      {data.updated && (
      <div>
        <div style={loading}>
          <h4>Your password has been successfully reset, please try logging in again.</h4>
        </div>
      </div>
      )}
      {data.error && (
        <div>
          <div style={loading}>
            <h4>Problem resetting password. Please try again.</h4>
          </div>
        </div>
      )}
    </div>
  );
}

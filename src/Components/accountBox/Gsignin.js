import React from 'react'
import { Button,Link } from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Icon  from './icon';
import useStyles from './styles';
import { AUTH } from '../constants/actionTypes';
const Gsignin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

    
        try {
         dispatch({ type: AUTH, data: { result, token } });
    
           history.push('/');
        } catch (error) {
          console.log(error);
        }
      };
      const googleError = () => alert('Google Sign In was unsuccessful. Try again later');
    
      const classes = useStyles();
  return (
    <GoogleLogin
            clientId="393187504719-870o8ako76qor4oo8d3vracjm9ai5a1o.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} 
              fullWidth onClick={renderProps.onClick}
                disabled={renderProps.disabled} 
                startIcon={<Icon />}
                 variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
  )
}
 export default Gsignin;


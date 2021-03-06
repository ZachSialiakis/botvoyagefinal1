import React from 'react';

import PasswordChange from '../PasswordChange';
//Material UI DIALOGS
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const PasswordChangeDialog = (props) => {

return (
  //DIALOGS AND BUTTON EVENTS FOR USERS TO CHANGE THEIR PASSWORD
<Dialog
    open={props.open}
    onClose={props.close}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">Change password</DialogTitle>
    <DialogContent>

      <br /><br />
      <PasswordChange onClose={props.close} />
    </DialogContent>
    <DialogActions>
      <Button onClick={props.close} color="primary">
        Cancel
      </Button>

    </DialogActions>
  </Dialog>
)
}

export default PasswordChangeDialog;

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const AddTransactionModal = ({openExpense,handleExpenseState}) => {
  return (
    <>
      <Dialog
        open ={openExpense}
        onClose={handleExpenseState}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
         <DialogTitle>Add an Expense</DialogTitle>   
         <DialogContent>
               Modal Popup
         </DialogContent>
         <DialogActions>
            <Button onClick={handleExpenseState}>Cancel</Button>
            <Button type='submit'>Save</Button>
         </DialogActions>
      </Dialog>
    </>
  )
}

export default AddTransactionModal

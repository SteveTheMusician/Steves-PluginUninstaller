import { createContext, useContext, useState } from 'react';
import Dialog from '../components/Dialog/Dialog';

const DialogContext = createContext(null);

export function useDialog() {
  return useContext(DialogContext);
}

export default function DialogProvider({ children }) {
    const [showDialogTrigger, setShowDialogTrigger] = useState(false);
    const [dialogOptions, setDialogOptions] = useState({});

    const openDialog = (options) => {
        setDialogOptions(options);
        setShowDialogTrigger(true);
    };

    return (
        <DialogContext.Provider value={{ openDialog }}>
          {children}
          <Dialog
            dialogType={dialogOptions.dialogType}
            dialogText={dialogOptions.dialogText}
            showDialogTrigger={showDialogTrigger}
            setShowDialogTrigger={setShowDialogTrigger}
            dialogAboardFunction={dialogOptions.dialogAboardFunction}
            dialogOkFunction={dialogOptions.dialogOkFunction}
            dialogButtonTextConfirm={dialogOptions.dialogButtonTextConfirm}
            dialogButtonTextAboard={dialogOptions.dialogButtonTextAboard}
          />
        </DialogContext.Provider>
    );
}
## how to use Dialog component

import "useDialog" in your component u want to use the dialog.
Just make shure, that your component isnot outside the DialogProvider component (usally not, cuz its in the main app)

```js
const { openDialog } = useDialog();

const showDeleteWarning = () => {
    openDialog({
      dialogType: 'warnconfirm', //type: error, warning, warnconfirm, info
      dialogText: 'Delete this plugin?', // dialog text
      dialogOkFunction: () => {
        console.log('confirmed'); //your function triggerd by klick on okey
      },
      dialogAboardFunction: () => {
        console.log('aborted'); // your function triggerd by click on aboard
      },
      dialogButtonTextConfirm: 'Uninstall', // ok-button text (standard: "ok" if empty)
      dialogButtonTextAboard: 'Aboard' // cancel-button text (if needed - standard: "cancel" if empty)
    });
  };
```
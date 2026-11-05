import './Dialog.css'
import classNames from 'classnames'
import Icon from '../Icon/Icon.jsx'
import { CloseWindow } from '../../core/WindowFunctions.jsx'
import { useState, useEffect } from 'react'

export default function Dialog({dialogType, dialogText, showDialogTrigger, setShowDialogTrigger, dialogAboardFunction, 
  dialogOkFunction, dialogButtonTextConfirm, dialogButtonTextAboard
}) {

  let checkTypeError = "error"
  let checkTypeWarn = "warning"
  let checkTypeInfo = "information"
  let checkTypeWarnConfirm = "warnconfirm"
  let checkTypeUninstall = "uninstall"
  let dialogButtonTextOkey = dialogButtonTextConfirm ?? "Ok"
  let dialogButtonTextClose = dialogButtonTextAboard ?? "Close"
  const [showDialogWithDelay, setShowDialogWithDelay] = useState(false)
  const [showDialogOverlay, setShowDialogOverlay] = useState(false)
  const [hideDialoagWarnConfirm, setHideDialogWarnConfirm] = useState(false)
  const [hideDialogOverlayDelay, setHideOverlayDelay] = useState(false)

    useEffect(() => {
    if(!showDialogTrigger) {
      setShowDialogWithDelay(false)
      setTimeout(() => setShowDialogOverlay(false),300)
    } else {
      setShowDialogOverlay(true)
      if(dialogType !== 'error'){
        setTimeout(() => setShowDialogWithDelay(true),10)
      }
    }
  },[showDialogTrigger])

  function hidedialogWarnConfirm() {
    setHideDialogWarnConfirm(true)
    setHideOverlayDelay(true)
    setTimeout(() => {
      // unmount overlay FIRST – nothing can flash afterwards
      setShowDialogOverlay(false)
      setShowDialogTrigger(false)
      setHideDialogWarnConfirm(false)
      setHideOverlayDelay(false)
      setShowDialogWithDelay(false)
    }, 310)
  }

  function hideDialog() {
    setShowDialogTrigger(false)
    setHideOverlayDelay(true)
    setTimeout(() => setHideOverlayDelay(false),310)

  }

  return(
    <>
    {showDialogOverlay ? 
        <div className={classNames('dialog-background-layer flex', hideDialogOverlayDelay ? 'dialog-background-layer--hide' : null) }>
         <div className={classNames('dialogbox dialog-'+dialogType, showDialogWithDelay? 'dialogbox-show': null, hideDialoagWarnConfirm ? 'dialogbox-aboard--close' : null) }>
            <div className="dialogbox-color-strip"></div>
            <div className="dialogbox-content-container dFlex">
              <div className="dialogbox-icon-container">
                <Icon name={dialogType == checkTypeWarnConfirm? "warning" : dialogType} color="" size={40} />
              </div>
              <div className="dialogbox-text-container dFlex">
                {dialogText}
              </div>
            </div>
            <div className="dialogbox-button-container flex">
              {dialogType === checkTypeError ?  <button className="button-reset" onClick={(e) => {CloseWindow(e)}}>{dialogButtonTextClose}</button> :
                dialogType === checkTypeWarn?  <button className="button-submit" onClick={() => {dialogOkFunction();hideDialog()}}>{dialogButtonTextOkey}</button> :
                  dialogType === checkTypeInfo?  <button className="button-submit" onClick={() => {dialogOkFunction();hideDialog()}}>{dialogButtonTextOkey}</button> :
                    dialogType === checkTypeWarnConfirm?  <><button className="button-submit" onClick={() => {dialogOkFunction();hideDialog()}}>{dialogButtonTextOkey}</button> <button className="button-reset" onClick={() => {dialogAboardFunction();hidedialogWarnConfirm() }}>{dialogButtonTextClose}</button></> :
                      dialogType === checkTypeUninstall ?  <button className="button-reset" onClick={(e) => {dialogAboardFunction()}}>{dialogButtonTextClose}</button> :
                        null}
            </div>
          </div>
        </div>
      : null}
      </>
  )
}
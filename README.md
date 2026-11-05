# Tauri + React

This template should help get you started developing with Tauri and React in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)


For Desktop development, run:
  npm run tauri dev

For Android development, run:
  npm run tauri android dev

For iOS development, run:
  npm run tauri ios dev

# Development
npm run tauri dev

# Production Build
npm run tauri build

## tauri installieren

Befehl oder App laden
```
winget install Rustlang.Rustup
https://rustup.rs/
´´´

Env setzen
```
$env:Path += ";$env:USERPROFILE\.cargo\bin"
```




                   <input type="text" className="inputData input-size--large"
                               list="knownPluginsDataList"
                               placeholder="Bsp: FabFilter Pro-Q 4" />
                        <datalist id="knownPluginsDataList">
                            {Object.keys(knowledgeKnownApps).map((appName) => (
                                <option key={appName} value={appName}>
                                    {appName}
                                </option>
                            ))}
                        </datalist>

                                    <Dialog dialogType={'warnconfirm'} dialogText={'beim clicken auf oke bla bla alle daten mit dem namen werden gelöscht - beachtet der einstellungen'} 
                dialogButtonTextWarnConfirm={'OK'} dialogButtonTextWarnConfirmAboard={'Aboard'} showDialogTrigger={showUninstallWarnDialog} setShowDialogTrigger={setShowUninstallWarnDialog}
                dialogAboardFunction={setShowUninstallWarnDialog} dialogOkFunction={handleDelete}/>
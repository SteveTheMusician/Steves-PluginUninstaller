import { exit } from  '@tauri-apps/plugin-process'

export function CloseWindow(e) {
    e.preventDefault();
    exit(0)
        .catch((e) => console.error("Close Window fehlgeschlagen: ", e))
}
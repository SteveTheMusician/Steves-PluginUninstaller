// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri_plugin_fs::FsExt;

#[tauri::command]
    // add commands to invoke handler so rust can use them
fn delete_file(path: String) -> Result<(), String> { 
    let file_path = std::path::Path::new(&path);
    
    if !file_path.exists() {
        return Err(format!("Path does not exist: {}", path));
    }
    
    if file_path.is_file() {
        return std::fs::remove_file(file_path)
            .map_err(|e| format!("Delete File ERROR: {}", e));
    } else if file_path.is_dir() {
        return std::fs::remove_dir_all(file_path)
            .map_err(|e| format!("Delete Directory ERROR: {}", e));
    }

    Err("Path is neither file nor directory".to_string())
}
#[tauri::command]
fn check_path_status(path: String) -> serde_json::Value {
    let p = std::path::Path::new(&path);
    
    serde_json::json!({
        "exists": p.exists(),
        "is_file": p.is_file(),
        "is_dir": p.is_dir(),
        "is_absolute": p.is_absolute(),
        "canonicalized": p.canonicalize().ok()
            .map(|c| c.to_string_lossy().to_string()),
    })
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_process::init())
        .invoke_handler(tauri::generate_handler![delete_file,check_path_status])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
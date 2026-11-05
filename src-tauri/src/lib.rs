// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri_plugin_fs::FsExt;

#[tauri::command]
fn delete_file(path: String) -> Result<String, String> {
    let mut log = String::new();
    
    let file_path = std::path::Path::new(&path);
    
    log.push_str(&format!("Checking: {}\n", path));
    println!("{}", log);

    if !file_path.exists() {
        let err_msg = "Path does not exist".to_string();
        log.push_str(&format!("ERROR: {}\n", err_msg));
        println!("{}", log);
        return Ok(log);  // Log zurückgeben, aber kein Error
    }

    if file_path.is_file() {
        match std::fs::remove_file(file_path) {
            Ok(_) => {
                log.push_str("File deleted successfully\n");
                println!("{}", log);
                Ok(log)
            }
            Err(e) => {
                let err_msg = format!("Failed to delete file: {}", e);
                log.push_str(&err_msg);
                println!("{}", log);
                Err(err_msg)
            }
        }
    } else if file_path.is_dir() {
        match std::fs::remove_dir_all(file_path) {
            Ok(_) => {
                log.push_str("Directory deleted successfully\n");
                println!("{}", log);
                Ok(log)
            }
            Err(e) => {
                let err_msg = format!("Failed to delete directory: {}", e);
                log.push_str(&err_msg);
                println!("{}", log);
                Err(err_msg)
            }
        }
    } else {
        let msg = "Path is neither file nor directory".to_string();
        log.push_str(&msg);
        println!("{}", log);
        Ok(msg)
    }
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
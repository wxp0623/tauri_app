// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod payment;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hellod, {}!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
                greet, 
                payment::add_payment,
                payment::update_payment,
                payment::delete_payment,
                payment::get_payments
            ]
        )
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
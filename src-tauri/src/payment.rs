use serde::{Serialize, Deserialize};
use mysql::*;
use mysql::prelude::*;

#[derive(Serialize, Deserialize)]
pub struct Payment {
    pub name: String,
    pub amount: f64,
    pub date: String,
    pub category: String,
    pub note: Option<String>,
    pub is_income: bool,
    pub person_count: i32,
}

// 查询所有
#[tauri::command]
pub fn get_payments() -> Result<Vec<Payment>, String> {
    let mut conn = get_conn().map_err(|e| e.to_string())?;
    let payments = conn
        .query_map(
            "SELECT name, amount, date, category, note, is_income, person_count FROM payment",
            |(name, amount, date, category, note, is_income, person_count)| Payment {
                name,
                amount,
                date,
                category,
                note,
                is_income,
                person_count,
            },
        )
        .map_err(|e| e.to_string())?;
    Ok(payments)
}

// 删除（按 name 删除，实际建议用主键 id）
#[tauri::command]
pub fn delete_payment(name: String) -> Result<String, String> {
    let mut conn = get_conn().map_err(|e| e.to_string())?;
    conn.exec_drop(
        "DELETE FROM payment WHERE name = :name",
        params! { "name" => name },
    )
    .map_err(|e| e.to_string())?;
    Ok("删除成功".to_string())
}

// 修改（按 name 修改，实际建议用主键 id）
#[tauri::command]
pub fn update_payment(payment: Payment) -> Result<String, String> {
    let mut conn = get_conn().map_err(|e| e.to_string())?;
    conn.exec_drop(
        r"UPDATE payment SET amount=:amount, date=:date, category=:category, note=:note, is_income=:is_income, person_count=:person_count WHERE name=:name",
        params! {
            "name" => payment.name,
            "amount" => payment.amount,
            "date" => payment.date,
            "category" => payment.category,
            "note" => payment.note,
            "is_income" => payment.is_income,
            "person_count" => payment.person_count,
        }
    )
    .map_err(|e| e.to_string())?;
    Ok("修改成功".to_string())
}

#[tauri::command]
pub fn add_payment(payment: Payment) -> Result<String, String>  {
 let mut conn = get_conn().map_err(|e| e.to_string())?;

    conn.exec_drop(
        r"INSERT INTO payment (name, amount, date, category, note, is_income, person_count)
          VALUES (:name, :amount, :date, :category, :note, :is_income, :person_count)",
        params! {
            "name" => payment.name,
            "amount" => payment.amount,
            "date" => payment.date,
            "category" => payment.category,
            "note" => payment.note,
            "is_income" => payment.is_income,
            "person_count" => payment.person_count,
        }
    ).map_err(|e| e.to_string())?;

    Ok("添加成功".to_string())
}



pub fn get_conn() -> Result<PooledConn> {
    let url = "mysql://root:765540@Wu@192.168.1.193:3306/tauri_app";
    let pool = Pool::new(url)?; // 创建连接池
    let conn = pool.get_conn()?; // 获取连接                                        
    Ok(conn)
}

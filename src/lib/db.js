// src/lib/db.js
import mysql from "mysql2/promise";

let pool;

export function getDb() {
  if (!pool) {
    pool = mysql.createPool(process.env.DATABASE_URL);
  }
  return pool;
}

// ⚠️ DO NOT call initDB here

"use server";
import { getDb } from "@/lib/db";

export async function ContactForm(data) {
  const db = getDb();

  try {
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return { success: false, error: "All fields are required" };
    }

    // Ensure table exists right before inserting
    await db.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    const values = [name, email, message];

    await db.execute(query, values);

    return { success: true };
  } catch (err) {
    console.error("Database Error:", err);
    return { success: false, error: "Database connection or query failed." };
  }
}

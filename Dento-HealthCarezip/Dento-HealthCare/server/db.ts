import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../shared/schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set');
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });

export const connectDB = async () => {
  try {
    await sql('SELECT 1');
    console.log('PostgreSQL connected successfully');
  } catch (err) {
    console.error('PostgreSQL connection error:', err);
    process.exit(1);
  }
};

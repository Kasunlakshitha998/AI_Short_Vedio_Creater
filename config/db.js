import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Initialize Neon client
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL);

// Pass the client directly to Drizzle
export const db = drizzle(sql);

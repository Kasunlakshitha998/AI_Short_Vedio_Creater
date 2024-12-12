import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./config/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:2F8dKkRHyPxg@ep-rapid-boat-a5slk3yg.us-east-2.aws.neon.tech/AI-short-video-genarator?sslmode=require",
  },
});

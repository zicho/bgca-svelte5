import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
	schema: './src/lib/server/database/schema/*.ts',
	out: './drizzle',
	dialect: 'sqlite',
	driver: 'turso',
	dbCredentials: {
		url: process.env.PRIVATE_TURSO_DB_URL as string,
		authToken: process.env.PRIVATE_TURSO_DB_AUTH_TOKEN as string
	}
});

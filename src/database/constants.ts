export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';

const USERNAME = process.env.POSTGRES_USER || "postgres";
const PASSWORD = process.env.POSTGRES_PASSWORD || "postgres";

export const DATABASE_CONFIG = {
	HOST: 'localhost',
	PORT: 5432,
	DATABASE: 'learning',
	USERNAME,
	PASSWORD,
}
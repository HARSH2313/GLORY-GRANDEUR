import { Pool } from 'pg';

// Create a new Pool instance to manage database connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Connection string from environment variables
});

// Export the pool instance for use in other parts of the application
export default pool;

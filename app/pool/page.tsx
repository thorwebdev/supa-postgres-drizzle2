import { createPool } from '@vercel/postgres'

const pool = createPool({
  connectionString: process.env.POSTGRES_URL,
})
const { sql } = pool

export default async function Neon() {
  const data = await sql`SELECT * FROM users`
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

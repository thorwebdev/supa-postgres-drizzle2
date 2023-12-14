import { createPool } from '@vercel/postgres'

export default async function Neon() {
  let data
  try {
    const pool = createPool({
      connectionString: process.env.POSTGRES_URL,
    })
    const { sql } = pool
    data = await sql`SELECT * FROM users`
  } catch (error) {
    data = error
  }
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

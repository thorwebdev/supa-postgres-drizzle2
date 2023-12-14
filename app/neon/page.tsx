import { Pool } from '@neondatabase/serverless'

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

export default async function Neon() {
  const connection = await pool.connect()
  const res = await pool.query('SELECT * FROM users')
  const data = res.rows
  await connection.release()
  await pool.end()

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

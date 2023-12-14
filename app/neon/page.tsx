import { Pool } from '@neondatabase/serverless'

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

export default async function Neon() {
  let data
  try {
    const connection = await pool.connect()
    const res = await pool.query('SELECT * FROM users')
    data = res.rows
    await connection.release()
    await pool.end()
  } catch (error) {
    data = error
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

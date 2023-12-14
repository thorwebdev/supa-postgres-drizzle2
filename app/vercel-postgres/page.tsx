import { sql } from '@vercel/postgres'

export default async function Neon() {
  let data
  try {
    data = await sql`SELECT * FROM users`
  } catch (error) {
    data = error
  }
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

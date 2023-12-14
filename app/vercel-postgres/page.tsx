import { sql } from '@vercel/postgres'

export default async function Neon() {
  const data = await sql`SELECT * FROM users`
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

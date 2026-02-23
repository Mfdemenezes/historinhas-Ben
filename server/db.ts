import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Para desenvolvimento local sem PostgreSQL, use DATABASE_URL=memory
const isMemoryMode = process.env.DATABASE_URL === 'memory' || !process.env.DATABASE_URL;

let pool: pg.Pool | null = null;
let db: any;

if (isMemoryMode) {
  console.log("⚠️  Modo memória ativado - dados serão perdidos ao reiniciar");
  console.log("   Para usar PostgreSQL, configure DATABASE_URL");
  // db será null, usaremos MemoryStorage
  db = null;
} else {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle(pool, { schema });
}

export { pool, db };

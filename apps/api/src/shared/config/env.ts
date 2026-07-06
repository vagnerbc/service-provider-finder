import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  API_PORT: z.coerce.number().int().positive().default(3333),
  DATABASE_URL: z.string().optional(),
  OTEL_SERVICE_NAME: z.string().default("faxinal-conectado-api")
});

export type AppConfig = z.infer<typeof envSchema>;

export function loadConfig(input: NodeJS.ProcessEnv = process.env): AppConfig {
  return envSchema.parse(input);
}

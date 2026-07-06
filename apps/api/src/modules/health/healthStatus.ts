export type HealthStatus = {
  status: "healthy";
  service: "faxinal-conectado-api";
  timestamp: string;
};

export function createHealthStatus(now: Date = new Date()): HealthStatus {
  return {
    status: "healthy",
    service: "faxinal-conectado-api",
    timestamp: now.toISOString()
  };
}

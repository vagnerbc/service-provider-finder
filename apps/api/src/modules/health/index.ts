import { createHealthRouter } from "./healthRoute.js";

export function createHealthModule() {
  return createHealthRouter();
}

import { HomePage } from "../pages/home/HomePage";
import { usePageTelemetry } from "../shared/observability/usePageTelemetry";

export function App() {
  usePageTelemetry("home");

  return <HomePage />;
}

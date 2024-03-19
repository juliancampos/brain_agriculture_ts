import { IHealthStatusUseCase } from "domain/interfaces";
import { HealthStatus } from "domain/models/HealthStatus";

class HealthStatusUseCase implements IHealthStatusUseCase {
  getStatus(): HealthStatus {
    return {
      name: "Brain Agriculture",
      version: "1.0.0",
      datetime: new Date()
    };
  }
}

export default HealthStatusUseCase;

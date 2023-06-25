import { DomainErrorType } from "./error-type.ts";

export class DomainError extends Error {
  private constructor(
    readonly message: string,
    readonly type: DomainErrorType,
  ) {
    super(message);
  }

  // --- Builders -------------------------------------------------------------
  static internal(msg: string) {
    return new DomainError(msg, "Internal");
  }

  static external(msg: string) {
    return new DomainError(msg, "External");
  }

  static client(msg: string) {
    return new DomainError(msg, "Client");
  }

  static notfound(msg: string) {
    return new DomainError(msg, "NotFound");
  }

  static unauthorized(msg: string) {
    return new DomainError(msg, "Unauthorized");
  }

  static forbidden(msg: string) {
    return new DomainError(msg, "Forbidden");
  }
}

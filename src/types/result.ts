import { DomainError } from "./error.ts";

export class Result<T> {
  private constructor(
    private readonly value: T,
    private readonly error: DomainError,
  ) {
  }

  isSuccess(): boolean {
    return this.value !== undefined;
  }

  getValue(): T {
    if (this.value === undefined) {
      throw new Error("Tried to unwrap value from unsuccessful result");
    }

    return this.value;
  }
  getError(): DomainError {
    if (this.error === undefined) {
      throw new Error("Tried to get error from successful result");
    }

    return this.error;
  }

  // --- Builders -------------------------------------------------------------
  static ok<T>(value: T): Result<T> {
    return new Result<T>(value, undefined!);
  }

  static internal<T>(msg: string): Result<T> {
    return new Result<T>(undefined!, DomainError.internal(msg));
  }

  static external<T>(msg: string): Result<T> {
    return new Result<T>(undefined!, DomainError.external(msg));
  }

  static client<T>(msg: string): Result<T> {
    return new Result<T>(undefined!, DomainError.client(msg));
  }

  static notfound<T>(msg: string): Result<T> {
    return new Result<T>(undefined!, DomainError.notfound(msg));
  }

  static unauthorized<T>(msg: string): Result<T> {
    return new Result<T>(undefined!, DomainError.unauthorized(msg));
  }

  static forbidden<T>(msg: string): Result<T> {
    return new Result<T>(undefined!, DomainError.forbidden(msg));
  }
}

export type AsyncResult<T> = Promise<Result<T>>;

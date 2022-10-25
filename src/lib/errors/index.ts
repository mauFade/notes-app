export class InvalidTokenError extends Error {
  public type: string;
  public status: number;
  constructor(message: string) {
    super(message);

    this.name = "InvalidTokenError";
    this.type = "INVALID_TOKEN";
    this.status = 401;
  }
}

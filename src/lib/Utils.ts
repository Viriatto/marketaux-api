import { DateTime } from "luxon";
import APIError from "./APIError.js";

export abstract class Utils {
  public static toAPIDate(date: Date) {
    return DateTime.fromJSDate(date).toUTC().toFormat("yyyy-MM-dd'T'HH:mm:ss");
  }

  public static isStringArray(value: unknown): value is string[] {
    return (
      Array.isArray(value) &&
      value.every((element) => typeof element === "string")
    );
  }

  public static isAPIError(object: object): object is APIError {
    return (
      "error" in object &&
      object.error !== null &&
      typeof object.error === "object" &&
      "code" in object.error &&
      typeof object.error.code === "string" &&
      "message" in object.error &&
      typeof object.error.message === "string"
    );
  }
}

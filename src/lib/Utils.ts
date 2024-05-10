import { DateTime } from "luxon";

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
}

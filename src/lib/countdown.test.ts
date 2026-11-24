import { describe, it, expect } from "vitest";
import { timeLeft } from "./countdown";
describe("timeLeft", () => {
  it("splits remaining time", () => {
    const now = Date.parse("2026-03-10T18:00:00+05:30");
    expect(timeLeft("2026-03-12T19:01:05+05:30", now)).toEqual({ days: 2, hours: 1, minutes: 1, seconds: 5 });
  });
  it("stops at zero after the wedding", () => {
    expect(timeLeft("2026-03-12T18:00:00+05:30", Date.parse("2027-01-01"))).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });
});

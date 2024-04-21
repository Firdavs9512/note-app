const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "UTC",
});

export const formatDateFromMs = (ms: number) =>
  dateFormatter.format(new Date(ms));

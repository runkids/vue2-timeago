export default function dateParser(date: string | number | Date): Date {
  const parsed = new Date(date)
  if (!Number.isNaN(parsed.valueOf())) {
    return parsed
  }

  const parts = String(date).match(/\d+/g)
  if (parts == null || parts.length <= 2) {
    return parsed
  } else {
    const [firstP, secondP, ...restPs] = parts.map((x) => parseInt(x))
    const correctedParts = [firstP, secondP - 1, ...restPs] as const
    const isoDate = new Date(Date.UTC(...correctedParts))
    return isoDate
  }
}

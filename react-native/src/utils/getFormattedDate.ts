export const getFormattedDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are 0-indexed
  const year = date.getUTCFullYear();

  return `${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year}`;
};

export const isNewProduct = (date: string) => {
  const productDate = new Date(date);
  const currentDate = new Date();
  const sevenDaysAgo = new Date(currentDate);
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  const productTimestamp = productDate.getTime();
  const sevenDaysAgoTimestamp = sevenDaysAgo.getTime();
  const currentTimestamp = currentDate.getTime();

  return (
    productTimestamp >= sevenDaysAgoTimestamp &&
    productTimestamp <= currentTimestamp
  );
};

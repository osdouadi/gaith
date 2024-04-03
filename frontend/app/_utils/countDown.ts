export function countDown(targetDate: Date) {
  const now = new Date();

  const calculateDifference = targetDate.getTime() - now.getTime();

    const daysDifference = Math.floor(calculateDifference / (1000 * 60 * 60 * 60 * 24))
    const hoursDifference = Math.floor((calculateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesDifference = Math.floor((calculateDifference % (1000 * 60 * 60)) / (1000 * 60))

    return { daysDifference, hoursDifference, minutesDifference };
  
}

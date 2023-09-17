export const getCoreHeight = config => {
  const { bottom, middle, peak } = config
  return bottom + middle + peak
}
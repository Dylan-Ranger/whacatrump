export function getTimestamp() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0'); // Pad hours to 2 digits
  const minutes = String(now.getMinutes()).padStart(2, '0'); // Pad minutes to 2 digits
  const seconds = String(now.getSeconds()).padStart(2, '0'); // Pad seconds to 2 digits

  return `${hours}:${minutes}:${seconds}`;
}
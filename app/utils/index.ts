export function generateId() {
  return `${Math.floor(Date.now() + Math.random())}`
    .split("")
    .reverse()
    .join("");
}

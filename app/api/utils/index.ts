export function generateId() {
  return `${Date.now() + Math.random()}`
    .split("")
    .reverse()
    .join("")
    .replace(".", "");
}

export function getIdFromUrl(url: string) {
  return /(\d*)$/.exec(url)![0];
}

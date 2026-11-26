export function escapeHtml(string) {
  return string.replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function shortString(string) {
  return string.length > 20 ? string.slice(0, 20-1) + '...' : string
}
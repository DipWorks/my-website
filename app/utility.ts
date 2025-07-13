export function linkify(text: string) {
  const urlRegex = /https?:\/\/[^\s]+/g;
  return text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">${url}</a>`;
  });
}

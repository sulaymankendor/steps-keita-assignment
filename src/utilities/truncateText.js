export function truncateText(text, numberOfChar) {
  if (text.length > numberOfChar) {
    let truncatedText = text.slice(0, numberOfChar);
    return `${truncatedText}...`;
  } else {
    return text;
  }
}

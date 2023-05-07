function getCurrentDateFormatted() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });
  return formattedDate;
}

module.exports = getCurrentDateFormatted;
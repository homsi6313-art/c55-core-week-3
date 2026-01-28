function isBookApplicable(searchString) {
  const isBookTitle = "The fundamentals of JavaScript";

  const cleanSearchString = searchString.trim().toLowerCase();

  const cleanTitle = isBookTitle.toLowerCase();

  return cleanTitle.includes(cleanSearchString);
}

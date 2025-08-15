/**
 * Removes duplicate categories based on their title (case-insensitive comparison)
 * @param {Array} categories - Array of category objects
 * @returns {Array} - Filtered array with unique categories
 */
export const getUniqueCategories = (categories) => {
  const seen = new Set();
  return categories.filter(category => {
    // Skip if no title or already seen this title (case-insensitive)
    if (!category?.title || seen.has(category.title.toLowerCase())) {
      return false;
    }
    seen.add(category.title.toLowerCase());
    return true;
  });
};

/**
 * Sorts categories alphabetically by title
 * @param {Array} categories - Array of category objects
 * @returns {Array} - Sorted array of categories
 */
export const sortCategoriesAlphabetically = (categories) => {
  return [...categories].sort((a, b) => 
    a.title.localeCompare(b.title)
  );
};

export function changeCategory(selectedCategory: string) {
  return {
    type: "CHANGE_CATEGORY",
    payload: { selectedCategory },
  };
}

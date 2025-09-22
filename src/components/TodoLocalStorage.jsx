const todoKey = "React_Todo_List";

export const getLocalStorageTodoData = () => {
  const rawTodos = localStorage.getItem(todoKey);
  if (!rawTodos) return [];

  try {
    return JSON.parse(rawTodos);
  } catch (error) {
    console.error("Error parsing todos from localStorage:", error);
    return [];
  }
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(todoKey, JSON.stringify(task));
};

export const safeString = (value?: string | null) => {
  return value ? value : "";
};

export const emptyString = (value?: string) => {
  return value ? value : "---";
};

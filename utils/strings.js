export const capitalizeDecorTitle = (decorKey) =>
  decorKey
    .split("-")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");

export const getDecorIcon = (decorKey) => `/decors/${decorKey}.png`;

export const getDecorKey = (decor, color) => `${decor}~${color}`;

export const parseDecorKey = (key) => {
  const extracted = key.split("~");

  return { decor: extracted[0], color: extracted[1] };
};
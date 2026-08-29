const images = import.meta.glob('/src/assets/projects/*', {
  eager: true,
});

export const getImage = (filename) => {
  const image = images[`/src/assets/projects/${filename}`];

  return image?.default;
};

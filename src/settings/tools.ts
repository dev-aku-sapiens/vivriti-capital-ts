export const sliceText = (text: string, showFull: boolean, value?: number) => {
  if (showFull) {
    return text;
  } else {
    return text.slice(0, value ?? 100) + '...';
  }
};

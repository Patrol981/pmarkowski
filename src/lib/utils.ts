function getWidth(doc: Document, id: string): number {
  const canvasPlaceholder = doc.getElementById(id);
  if(canvasPlaceholder) {
    return canvasPlaceholder.offsetWidth;
  } else {
    return 0;
  }
}

function getHeight(doc: Document, id: string): number {
  const canvasPlaceholder = doc.getElementById(id);
  if(canvasPlaceholder) {
    return canvasPlaceholder.offsetHeight;
  } else {
    return 0;
  }
}

export { getHeight, getWidth }

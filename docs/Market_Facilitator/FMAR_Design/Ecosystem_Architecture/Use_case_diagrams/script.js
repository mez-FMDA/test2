// After defining Actor, UseCase, etc...
const actor1 = new Actor({
  position: { x: 40, y: 50 },
  size: { width: 30, height: 60 },
  attrs: {
    label: { text: "User" }
  }
});

const uc1 = new UseCase({
  position: { x: 200, y: 50 },
  size: { width: 120, height: 40 },
  attrs: {
    label: { text: "Login" }
  }
});

const useLink = new Use({
  source: { id: actor1.id },
  target: { id: uc1.id }
});

graph.addCells([actor1, uc1, useLink]);

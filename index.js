export function step(node, config) {
  function adjustStep(inputVal) {
    if (config) {
      for (const condition of config.steps) {
        if (inputVal < condition.below) {
          return condition.step;
        }
      }

      return config.default;
    }

    return null;
  }

  function handleRangeChange(e) {
    node.step = adjustStep(e.target.value) || 1;
  }

  node.addEventListener("input", handleRangeChange);

  return {
    update(newConfig) {
      config = newConfig;
    },
    destroy() {
      node.removeEventListener("input", handleRangeChange);
    },
  };
}

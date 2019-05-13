module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement + 1 }
  } else {
  return { ...item };
  }
}

function fail(item) {
  if (item.enhancement >= 15) {
    if (item.enhancement > 16) {
      return { ...item, enhancement: item.enhancement -1 }
    }
    return { ...item, durability: item.durability - 10 }
  } else {
    return { ...item, durability: item.durability - 5 };
  }
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}

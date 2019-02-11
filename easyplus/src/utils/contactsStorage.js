let constacts = [];

const storage = {
  list(type) {
    if ([0, 1].includes(type)) {
      return constacts.filter(val => val.type === type);
    }
    return constacts;
  },
  add(id, name, number = '', type = 0) {
    if (this.exist(id, type)) {
      return;
    }

    constacts.push({
      id,
      name,
      number,
      type
    })

    console.log(constacts);
  },
  remove(id, type = 0) {
    const index = constacts.findIndex(val => val.id === id && val.type === type);

    constacts.splice(index, 1);
  },
  clear () {
    constacts.length = 0;
  },
  exist(id, type = 0) {
    const index = constacts.findIndex(val => val.id === id && val.type === type);

    return index !== -1;
  },
  get(id, type = 0) {
    const index = constacts.findIndex(val => val.id === id && val.type === type);

    if (index === -1) {
      return null
    }

    return constacts[index];
  }
};

export default storage;

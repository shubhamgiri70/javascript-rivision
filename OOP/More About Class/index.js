let user = {
  _name: "Arya",
  set name(value) {
    return (this._name = value.trim());
  },
  get name() {
    return (this._name = value.charAt(0).toUpperCase() + this._name.slice(1));
  },
};

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}

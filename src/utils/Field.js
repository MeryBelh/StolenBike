class Field {
  constructor(props) {
    const { name, label, type, deniedFor, options, initialValue, rules } = props;

    this.name = name;
    this.label = label;
    this.type = type;
    this.deniedFor = deniedFor;
    this.options = options;
    this.initialValue = initialValue;
    this.rules = rules;
  }
}

export default Field;

// Statement model (for type/structure definition)

export class Statement {
  constructor(id, text, tags = []) {
    this.id = id;
    this.text = text;
    this.tags = tags;
  }
} 
class Joke {
  constructor({ setup, punchline, type }) {
    this.setup = setup;
    this.punchline = punchline;
    this.type = type;
  }

  toString() {
    return this.setup ? `Q: ${this.setup} \nA: ${this.punchline}` : this.punchline;
  }
}

export { Joke };

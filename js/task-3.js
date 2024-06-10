class StringBuilder {

    #value;

    constructor(initialValue) {
        this.initialValue = initialValue;
        this.#value = this.initialValue;
    }

    getValue() {
        return this.#value;
    }

    padStart(str) {
        const finalWordlength = str.length + this.#value.length;
        this.#value = this.#value.padStart(finalWordlength, str);
    }

    padEnd(str) {
        const finalWordlength = str.length + this.#value.length;
        this.#value = this.#value.padEnd(finalWordlength, str);
    }
    padBoth(str) {
        const finalWordlength = str.length + this.#value.length;
        const firstStep = this.#value.padEnd(finalWordlength, str);
        this.#value = firstStep.padStart(firstStep.length+1, str);
    }
}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
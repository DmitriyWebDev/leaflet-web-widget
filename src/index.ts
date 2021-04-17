export class LeafletWebWidget {
    private readonly name;

    constructor(name: string) {
        this.name = name
    }

    getName() {
        return this.name;
    }
}

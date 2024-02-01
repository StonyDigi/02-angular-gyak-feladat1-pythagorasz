export class PythagorasModel {
    private befogo1: number = 0;
    private befogo2: number = 0;

    getBefogo1(): number {
        return this.befogo1;
    }

    setBefogo1(value: number): void {
        this.befogo1 = value;
    }
    getBefogo2(): number {
        return this.befogo2;
    }

    setBefogo2(value: number): void {
        this.befogo2 = value;
    }
    calculateAtfogo(): number | null {
        return Math.sqrt(this.befogo1 ** 2 + this.befogo2 ** 2);
    }












}
import { PythagorasModel } from './PythagorasModel';

export class PythagorasController {
    private model: PythagorasModel = new PythagorasModel;

    constructor(model: PythagorasModel) {
        this.model = model;
    }

    setBefogo1(value:number): void {
        this.model.setBefogo1(value);
    }
    setBefogo2(value:number): void {
        this.model.setBefogo2(value);
    }
    calculateAtfogo(): number | null {
        return this.model.calculateAtfogo();
    }
}
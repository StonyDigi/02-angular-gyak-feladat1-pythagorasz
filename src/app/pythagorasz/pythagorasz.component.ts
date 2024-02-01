import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PythagorasModel } from './PythagorasModel';
import { PythagorasController } from './PythagorasController';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pythagorasz',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pythagorasz.component.html',
  styleUrl: './pythagorasz.component.css'
})
export class PythagoraszComponent {
  private controller: PythagorasController;
  befogo1: number = 0;
  befogo2: number = 0;
  atfogo: number | null = null;

  constructor() {
    const model = new PythagorasModel();
    this.controller = new PythagorasController(model);
  }

  calculateAtfogo(): void {
    this.controller.setBefogo1(this.befogo1);
    this.controller.setBefogo2(this.befogo2);
    this.atfogo = this.controller.calculateAtfogo();
  }

}

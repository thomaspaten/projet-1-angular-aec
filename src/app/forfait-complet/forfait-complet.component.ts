import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfait';
import { IForfaits } from '../mock-forfait';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.scss'],
})
export class ForfaitCompletComponent implements OnInit {
  forfaits: IForfaits[] = FORFAITS;
  constructor() {}

  ngOnInit(): void {}
}

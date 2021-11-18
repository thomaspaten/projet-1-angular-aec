import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfait';
import { IForfaits } from '../mock-forfait';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.scss'],
})
export class MiniForfaitComponent implements OnInit {
  forfaits: IForfaits[] = FORFAITS;
  constructor() {}

  ngOnInit(): void {}
}

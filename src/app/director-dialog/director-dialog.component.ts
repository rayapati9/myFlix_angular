import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html',
  styleUrls: ['./director-dialog.component.scss'],
})
export class DirectorDialogComponent implements OnInit {

  /**
   * Injects directors array from movie-card object for use in movie-directors component
   * @param data -array of objects
   */

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      age: number;
    }
  ) {}

  ngOnInit(): void {}
}

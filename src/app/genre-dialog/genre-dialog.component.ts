import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre-dialog',
  templateUrl: './genre-dialog.component.html',
  styleUrls: ['./genre-dialog.component.scss'],
})
export class GenreDialogComponent implements OnInit {
  /**
   * Injects genre name and description from movie-card component for use in movie-genre component dialog
   * @param data -object
   */

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      description: string;
    }
  ) {}

  ngOnInit(): void {}
}

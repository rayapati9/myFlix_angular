import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss'],
})
export class DetailsDialogComponent implements OnInit {
   /**
    * Injects movie title, image and description from the movie-card component for use in movie detail dialog
    * @param data -object
    */


  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      imagepath: string;
      description: string;
      director: string;
      genre: string;
    }
  ) {}

  ngOnInit(): void {}
}

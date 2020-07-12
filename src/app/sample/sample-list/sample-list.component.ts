import { Component, OnInit, ViewChild } from '@angular/core';
import { SampleService } from '../sample.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SampleDto } from '../../shared/models/sampleDto';


@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.scss']
})
export class SampleListComponent implements OnInit {
  loading = 0;
  spinner = this.overlay.create({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position().global().centerHorizontally().centerVertically()
  });

  displayedColumns: string[] = ['displayOrder', 'sampleName', 'sampleDescription'];
  sampleList: MatTableDataSource<SampleDto>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private sampleService: SampleService, private _snackBar: MatSnackBar, private overlay: Overlay) {
    this.sampleList = new MatTableDataSource();
  }

  ngOnInit() {
    this.sampleList.paginator = this.paginator;
    this.sampleList.sort = this.sort;
    this.refresh();
  }

  getsampleList() {
    this.startLoading();
    this.sampleService.getSampleList().subscribe(
      result => {
        this.sampleList.data = result;
        this.endLoading();
      },
      error =>  {
        console.log('There was an error: ' + error);
        this._snackBar.open('Error: ' + error.error.message, null, {
          duration: 5000,
          panelClass: ['snack-bar']
        });
        this.resetLoading();
      }
    );
  }

  applyFilter(filterValue: string) {
    this.sampleList.filter = filterValue.trim().toLowerCase();

    if (this.sampleList.paginator) {
      this.sampleList.paginator.firstPage();
    }
  }

  startLoading() {
    this.loading++;
    if (this.loading === 1) {
      this.spinner.attach(new ComponentPortal(MatSpinner));
    }
  }

  endLoading() {
    this.loading--;
    if (this.loading === 0) {
      this.spinner.detach();
    }
  }

  resetLoading() {
    this.loading = 0;
    this.spinner.detach();
  }

  refresh() {
    this.getsampleList();
  }
}

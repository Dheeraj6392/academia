import { Component, Input, OnInit } from '@angular/core';
import { PaperDashboardService, QPaper } from '../../Services/paper_dashboard/paper-dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paper-dashboard',
  templateUrl: './paper-dashboard.component.html',
  styleUrls: ['./paper-dashboard.component.css']
})
export class PaperDashboardComponent implements OnInit {
  @Input() course!: string;

  qpapers: QPaper[] = [];
  filteredQpapers: QPaper[] = [];
  searchTerm: string = '';
  selectedImage: string | null = null;

  constructor(private qpaperService: PaperDashboardService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.course = params['course'] || ''; 
    });
    this.qpaperService.getQpapers().subscribe(data => {
      this.qpapers = data;
    });
  }

  onSearch(): void {
    const year = parseInt(this.searchTerm, 10);

    this.filteredQpapers = this.qpapers.filter(paper =>
      (!isNaN(year) ? paper.year === year : true) &&
      (this.course ? (paper.course?.toLowerCase() === this.course.toLowerCase()) : true)
    );
  }


  openModal(imagePath: string): void {
    this.selectedImage = imagePath;
  }

  closeModal(): void {
    this.selectedImage = null;
  }
}

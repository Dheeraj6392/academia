import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']  // Note: styleUrls, not styleUrl
})
export class TestComponent {
  sem_1_Subjects: string[] = [
    'FUNDAMENTALS OF ELECTRONICS',
    'INTRODUCTION TO PROGRAMMING',
    'LINEAR ALGEBRA',
    'PHYSICS',
    'PRINCIPLE OF MANAGEMENT',
    'PROFESSIONAL COMMUNICATION'
  ];
}

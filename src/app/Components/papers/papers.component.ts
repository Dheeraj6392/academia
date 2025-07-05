import { Component } from '@angular/core';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrl: './papers.component.css'
})
export class PapersComponent {
  sem_1_Subjects: string[] = ['Math', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'];
  sem_2_Subjects: string[] = ['Math', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'];
  sem_3_Subjects: string[] = ['Math', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'];
  sem_4_Subjects: string[] = ['Math', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science'];
}

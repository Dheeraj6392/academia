import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-papers',
  templateUrl: './upload-papers.component.html',
  styleUrl: './upload-papers.component.css'
})
export class UploadPapersComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.uploadForm = this.fb.group({
      title: [''],
      description: ['']
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('title', this.uploadForm.get('title')?.value);
    formData.append('description', this.uploadForm.get('description')?.value);

    this.http.post('YOUR_BACKEND_URL_HERE', formData).subscribe({
      next: res => console.log('Uploaded successfully', res),
      error: err => console.error('Upload error', err)
    });
  }
}

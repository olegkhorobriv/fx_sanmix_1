// src/app/components/file-upload/file-upload.component.ts
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  fileInfos?: any[];

  constructor(private uploadService: FileUploadService) {}

  ngOnInit(): void {
    this.uploadService.getFiles().subscribe(data => {
      this.fileInfos = data;
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile).subscribe(
          (response) => {
            this.message = response.message;
            this.uploadService.getFiles().subscribe(data => {
              this.fileInfos = data;
            });
          },
          (error) => {
            console.log(error);
            this.message = 'Could not upload the file!';
          }
        );
      }
    }
  }

  deleteFile(filename: string): void {
    this.uploadService.deleteFile(filename).subscribe(
      (response) => {
        this.message = response.message;
        this.uploadService.getFiles().subscribe(data => {
          this.fileInfos = data;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  downloadFile(filename: string): void {
    this.uploadService.downloadFile(filename).subscribe(
      (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

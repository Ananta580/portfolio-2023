import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileDownloadService {
  constructor() {}

  downloadFile(fileName: string) {
    // Create an anchor element
    const link = document.createElement('a');

    // Set the href attribute to the path of the file
    link.href = `assets/${fileName}`;

    // Set the download attribute to the file name
    link.download = fileName;

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the anchor element from the DOM
    document.body.removeChild(link);
  }
}

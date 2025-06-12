import { Component } from '@angular/core';
import { SummarizerService } from '../../services/summarizer.service';

@Component({
  selector: 'app-summarizer',
  templateUrl: './summarizer.component.html',
  styleUrls: ['./summarizer.component.scss']
})
export class SummarizerComponent {
  content = '';
  summary = '';
  loading = false;
  error = '';

  constructor(private summarizerService: SummarizerService) {}

  summarize() {
    this.loading = true;
    this.summary = '';
    this.error = '';
    this.summarizerService.summarize(this.content).subscribe({
      next: (res) => {
        this.summary = res.summary;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to summarize the content.';
        this.loading = false;
      }
    });
  }
}
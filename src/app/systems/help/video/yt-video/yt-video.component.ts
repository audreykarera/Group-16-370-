import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-yt-video',
  templateUrl: './yt-video.component.html',
  styleUrls: ['./yt-video.component.scss']
})
export class YtVideoComponent implements OnInit {
  

  safeUrl;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/xR7rTFhqHPI');
  }

}

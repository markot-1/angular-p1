import { Component, Input } from '@angular/core';
import { ChangeBgColorPipe } from '../../../pipes/change-bg-color.pipe';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [ChangeBgColorPipe, ButtonComponent],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
  @Input() videoData: any;
}

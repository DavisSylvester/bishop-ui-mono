import { Component } from '@angular/core';
import { faGoogle, faSquareFacebook, faAmazon, faApple } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'bf-auth-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {

  faGoogle = faGoogle;
  faFacebook = faSquareFacebook;
  faApple = faApple;
  faAmazon = faAmazon;
}

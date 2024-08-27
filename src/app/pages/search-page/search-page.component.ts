import { Component, inject } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileCardComponent } from '../../common_ui/profile-card/profile-card.component';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent, ProfileService],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  title = 'PointOfView';
  profileService = inject(ProfileService)
  profiles : Profile[] = []
  constructor(){
    this.profileService.getTestAccounts()
    .subscribe((value: Profile[]) =>{this.profiles = value})
    
  }

}


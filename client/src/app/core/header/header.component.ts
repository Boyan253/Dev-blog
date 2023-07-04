import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

  animations: [
    trigger('slideInOut', [
      state('in', style({
        'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        'max-height': '75px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [group([
        animate('400ms ease-in-out', style({
          'opacity': '0'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '75px'
        })),
        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
      ]
      )]),
      transition('out => in', [group([
        animate('1ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('600ms ease-in-out', style({
          'max-height': '500px'
        })),
        animate('800ms ease-in-out', style({
          'opacity': '1'
        }))
      ]
      )])
    ]),

    trigger('colorChange', [
      state('green', style({
        'background-color': 'green'
      })),
      state('transparent', style({
        'background-color': 'transparent'
      })),
      transition('green <=> transparent', [
        animate('0.5s')
      ])
    ])
  ]
})
export class HeaderComponent {
  isShowed = true;
  isGreen = false;

  @ViewChild('header') headerElement?: ElementRef;
  @ViewChild('h1') h1Element?: ElementRef;
  @ViewChild('img') imgElement?: ElementRef;
  @ViewChild('bio') bioElement?: ElementRef;
  @ViewChild('hr') hrElement?: ElementRef;

  @ViewChild('socials') socialsElement?: ElementRef;
  @ViewChild('nav') navElement?: ElementRef;

  constructor(private router: Router) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateMenuState(window.innerWidth);
  }

  updateMenuState(screenWidth: number) {
    if (screenWidth > 1000) {
      this.isShowed = true;
    } else {
      this.isShowed = false;
    }
    this.headerElement!.nativeElement.style.opacity = '1';

    setTimeout(() => {
      this.headerElement!.nativeElement.style.opacity = '1';
      if (this.isShowed === false) {

        // this.headerElement!.nativeElement.style.maxHeight = '75px';
      }

      // this.headerElement!.nativeElement.style.height = 'auto'
    }, 1000)

  }

  toggleMenu() {
    this.isShowed = !this.isShowed;
  }

  get stateName() {
    return this.isShowed ? 'in' : 'out';
  }

  get colorStateName() {
    return this.isGreen ? 'green' : 'transparent';
  }

  showMenu() {
    this.toggleMenu();
    this.isGreen = this.isShowed && window.innerWidth <= 1000;
    this.headerElement!.nativeElement.style.opacity = '1';

    setTimeout(() => {
      this.headerElement!.nativeElement.style.opacity = '1';
      if (this.isShowed === false) {

        // this.headerElement!.nativeElement.style.maxHeight = '75px';
      }

      // this.headerElement!.nativeElement.style.height = 'auto'
    }, 750)
  }
  // goToLastPostDetails() {
  //   const lastPostDetailsString = localStorage.getItem('lastPostDetails');
  //   if (lastPostDetailsString) {
  //     const lastPostDetails = JSON.parse(lastPostDetailsString);
  //     if (lastPostDetails && lastPostDetails.id) {
  //       this.router.navigate(['/post-details', lastPostDetails.id]);
  //       return lastPostDetails; // Return lastPostDetails object
  //     }
  //   }
  
  //   // Redirect to the latest post if no last post details or invalid post id found
  //   this.router.navigate(['/latest-post']);
  //   return undefined; // Return null if no valid lastPostDetails
  // }
  
  


}

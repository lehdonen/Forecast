import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface NavigationPath {
  path: string;
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigationPaths: NavigationPath[] = [
    {
      path: '',
      label: 'home',
      active: false,
    },
    {
      path: 'forecast',
      label: 'forecast',
      active: false,
    }
    ];

  constructor(
    private router: Router,
  ) {  }

  ngOnInit() {
    const currentPath = window.location.pathname;
    this.navigationPaths = this.navigationPaths.map(navPath => ({
      ...navPath,
      active: currentPath === navPath.path,
    }));
  }

  navigate(path: NavigationPath) {
    this.router.navigate([path.path]);
    this.navigationPaths = this.navigationPaths.map(navPath => ({
      ...navPath,
      active: navPath.path === path.path,
    }));
  }

}

import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {NavigationStart, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // Clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // Only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // Clear alert
          this.subject.next();
        }
      }
    });
  }

  public success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  public error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
  }

  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}

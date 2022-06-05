import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './services/error.service';
import { NotificationService } from './services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    const notifier = this.injector.get(NotificationService);

    let message;
    if (error instanceof HttpErrorResponse) {
      message = errorService.getServerErrorMessage(error);
      notifier.showError(message);
    } else {
      message = errorService.getClientErrorMessage(error);
      notifier.showError(message);
    }
  }
}
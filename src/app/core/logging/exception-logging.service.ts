import { ErrorHandler, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import 'stackframe/dist/stackframe.min';
import * as ErrorStackParser from 'error-stack-parser/dist/error-stack-parser.min';
import { environment } from '../../../environments/environment';
import { AppInsightsMonitoringService } from './app-insights-monitoring.service';



@Injectable()
export class ExceptionLoggingService extends ErrorHandler {

    constructor(private http: HttpClient, private appInsightsMonitoringService: AppInsightsMonitoringService) {
      super();
    }

    handleError(exception: any): void {
      super.handleError(exception);

      try {
        const baseUrl: string = environment.baseUrl;
        const errorMessage = exception.toString();
        // use the traceService to generate a stack trace
        const stackFrames = ErrorStackParser.parse(exception);
        const msg = errorMessage + '\r\nURL: ' + window.location.href + '\r\ntack trace:' + stackFrames.join('\r\n') + '\r\n';

        // Send custom events to app insight
        this.appInsightsMonitoringService.logException(exception);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
        this.http.post(baseUrl + '/Exception', JSON.parse(msg), httpOptions).subscribe(
          () => {console.log('Error Logged:\r\n' + msg); },
          err => {console.error(err); }
        );

      } catch (loggingError) {
          console.warn('Error server-side logging failed');
          console.log(loggingError);
      }
    }
}



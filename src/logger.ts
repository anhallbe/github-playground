export class Logger {
   public static log(message?: any, ...optionalParams: any[]) {
      // tslint:disable-next-line: no-console
      console.log(message, ...optionalParams);
   }
}

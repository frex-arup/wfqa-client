export class ApiResponse {
  data: any;
  datas: any[];
  sucessCode: string;
  errorCode: string;
}
export class ErrorResponse {
  error:ApiResponse = new ApiResponse();
}

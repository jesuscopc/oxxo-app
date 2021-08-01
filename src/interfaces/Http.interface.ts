export interface ResponseHandler {
  success: boolean;
  status: number;
  headers: unknown;
  data: unknown;
  message: string;
}

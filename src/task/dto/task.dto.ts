export class TaskDTO {
  id?: string;
  title: string;
  description: string;
  status: string;
  expirationDate: Date;
}

export interface FindAllParamsDTO {
  title: string;
  status: string;
}

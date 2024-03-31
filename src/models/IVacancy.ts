import { IUser } from "./IUser";

export interface IVacancy {
    id: number;
    title: string;
    description: string;
    owner: IUser;
    location: string;
    salary: number;
    requirements: string[];
    responsibilities?: string[];
    startDate?: Date;
    endDate?: Date;
    status?: 'open' | 'closed' | 'filled';
    applicants?: IUser[];
    createdAt?: Date;
    updatedAt?: Date;
  }
  
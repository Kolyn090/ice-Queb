export type OfficeHourId = string;

export interface OfficeHourList {
    email: string;
    officeHourId: OfficeHourId[];
}

export interface OfficeHour {
    id: OfficeHourId;
    facultyName: string;
    facultyEmail: string;
    day: number;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    courseDepartment: string;
    courseNumber: string;
}

export type OfficeHourWithoutID = Omit<OfficeHour, 'id'>;

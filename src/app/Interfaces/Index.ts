export interface Title{
    TitleId: number | null; 
    TitleName: string | null;
}

export interface EmployeeType{
    EmployeeTypeId: number | null;
    EmployeeTypeName: string | null;
}

export interface EmploymentStatus{
    EmploymentStatusId: number | null;
    EmploymentStatusName: string | null;
}

export interface Complaint{
    ComplaintId: number | null;
    ComplaintDescription: string | null; 
    ComplaintDate: string | null; 
    Rating: number | null;
}
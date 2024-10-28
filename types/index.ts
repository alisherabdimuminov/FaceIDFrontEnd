export interface IResponse<T> {
    status: "success" | "error"
    code: string
    data: T
}

export interface ICountry {
    name: string
    flag: string
}

export interface IApplication {
    name: string
    file: string
    description: string
    created: string
}

export interface IAttendance {
    id: number
    uuid: string
    first_name: string
    last_name: string
    attendance: "arrived" | "did_not_come" | "late"
    attendance_time: string
    attendance_area: string
}

export interface IDepartment {
    id: string
    name: string
    employees: number
}

export interface IEmployee {
    id: number
    uuid: string
    department: IDepartment
    position: string

    first_name: string
    last_name: string
    middle_name: string
    gender: string
    nationality: string
    image: string
    birth_date: string

    state?: string
    province?: string
    district?: string
    address?: string

    passport_number: string
    passport_pinfl: string
    passport_of_issue: string

    specialist?: string
    scientific_title?: string
    academic_degree?: string

    email?: string
    phone: string
}

export interface ICoordinate {
    name: string
    longitude: string
    latitude: string
}

export interface IArea {
    name: string
    coordinates: ICoordinate[]
}

export interface IReport {
    employee: IEmployee
    status: "passed" | "failed"
    state: "passed" | "late"
    area: IArea
    image: string
    created: string
}

export interface IData {
    date: string
    "Ishga kelgan xodimlar": number
}

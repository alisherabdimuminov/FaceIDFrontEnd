export interface IResponse<T> {
    status: "success" | "error"
    code: string
    data: T
}

export interface IDepartment {
    id: number
    name: string
}

export interface IEmployee {
    uuid: string
    department: IDepartment
    position: string
    first_name: string
    last_name: string
    middle_name: string
    passport_number: string
    passport_pinfl: string
    image: string
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
    area: IArea
    image: string
    created: string
}

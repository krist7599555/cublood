import { IsString, IsEnum, IsDate, MinLength, IsUUID, IsBoolean, IsNumberString, Length, IsOptional, Min, Max, MinDate, MaxDate, IsInt } from 'class-validator'
import { Type } from 'class-transformer'
import * as dayjs from 'dayjs'

export enum UserGender {
  male = "male",
  female = "female",
}
export enum UserStatus {
  nisit = "nisit",
  teacher = "teacher",
  staff = "staff",
  alumni = "alumni",
}
export enum UserNationality {
  thai = "thai",
  foreign = "foreign",
}
export enum UserAcademic {
  year_1 = "1",
  year_2 = "2",
  year_3 = "3",
  year_4 = "4",
  year_5 = "5",
  year_6 = "6",
  master = "master",
  docter = "docter",
}
export enum UserBloodType {
  A = "A",
  B = "B",
  O = "O",
  AB = "AB",
}
export enum UserRh {
  plus = "+", 
  minus = "-",
  unsure = "unsure",
}

export class User {
  @IsUUID()                                                   id: string;
  @IsString()                                                 email: string;
  @IsString() @MinLength(4)                                   password: string;
  @IsNumberString() @Length(10)                               phone: string; 
  @IsString() @MinLength(10)                                  address: string;
  @IsString()                                                 name: string;
  @IsString()                                                 surname: string;
  @IsString()                                                 nickname: string;
  @IsEnum(UserGender)                                         gender: string;
  @IsInt() @Min(36) @Max(48)                                  shirt: number;
  @IsInt() @Min(45)                                           weight: number;
  @IsEnum(UserStatus)                                         status: string;
  @IsEnum(UserNationality)                                    nationality: string;
  @IsEnum(UserAcademic)                                       academic: string;
  @IsNumberString() @Length(10)                               student_id: string;
  @IsInt() @Min(20) @Max(100)                                 faculty: string;
  @IsBoolean()                                                is_donated: boolean;
  @IsBoolean()                                                is_enrolled: boolean;
  @IsEnum(UserBloodType)                                      blood_type: string;
  @IsEnum(UserRh)                                             rh: string;
  @IsOptional() @IsString()                                   medical_condition: string;
  @Type(() => Date) @IsDate() 
  @MinDate(dayjs().subtract(70, 'year').toDate()) 
  @MaxDate(dayjs().subtract(17, 'year').toDate())             birth: Date;
}
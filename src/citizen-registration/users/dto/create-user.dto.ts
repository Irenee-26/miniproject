export class CreateUserDto {
readonly middleName?: string; 
readonly lastName: string; 
readonly email: string; 
readonly dateOfBirth?: Date; 
readonly nationality?: string 
readonly address?: string 
readonly isActive?: boolean;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    firstName: string;

    @Column({ nullable: true })
    middleName: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    dateOfBirth: Date;

    @Column({ nullable: true })
    nationality: string

    @Column()
    CountryOfBirth: String

    @Column()
    StateOfBirth: String

    @Column()
    TownOfBirth: String

    @Column({ nullable: true })
    ResidenceAddress: string

    @Column()
    Profession: String

    @Column({ default: true })
    isActive: boolean;
}
import { ApartmentInfo } from "@/api";
import { User } from "@/db/entities/user";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import uuid from "uuid";

@Entity()
export class Apartment {
  public static create(props: ApartmentInfo, realtorId: string): Apartment {
    const apartment = new Apartment();
    apartment.apartmentId = uuid.v4();
    apartment.realtor = new User();
    apartment.realtor.userId = realtorId;
    apartment.floorArea = props.floorArea;
    apartment.pricePerMonth = props.pricePerMonth;
    apartment.numberOfRooms = props.numberOfRooms;
    apartment.latitude = props.coordinates.latitude;
    apartment.longitude = props.coordinates.longitude;
    apartment.rented = props.rented;
    apartment.added = new Date();
    return apartment;
  }

  @PrimaryColumn("varchar", {
    length: 36,
  })
  public apartmentId!: string;

  @ManyToOne((type) => User, {
    eager: true,
  })
  @JoinColumn({ name: "realtorId" })
  public realtor!: User;

  @Column("float") public floorArea!: number;

  @Column("int") public pricePerMonth!: number;

  @Column("int") public numberOfRooms!: number;

  @Column("float") public latitude!: number;

  @Column("float") public longitude!: number;

  @Column("bool") public rented!: boolean;

  @Column("timestamp without time zone") public added!: Date;
}
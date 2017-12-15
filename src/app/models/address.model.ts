export class Address {
    public addressId: string;
    public cityName: string;
    public name: string;
    public streetNumber: number;
    public streetName: string;

    public updateFrom(src: Address): void {
      this.addressId = src.addressId;
      this.cityName = src.cityName;
      this.name = src.name;
      this.streetNumber = src.streetNumber;
      this.streetName = src.streetName;
    }
  }

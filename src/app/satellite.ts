export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
      constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
      }
    
      shouldShowWarning(): boolean {
        return this.type.toLowerCase() === 'space debris';
      }
    
      zebraStripe(arr): boolean {
        return arr.indexOf(this) % 2 === 0 && this.type.toLowerCase() !== 'space debris';
      }
      }

export const DAYS: string[] = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

export const DAYS_SORT: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const MONTHS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export class Age {
    year: number;
    month: number;
    day: number;

    constructor() {
        this.year = null;
        this.month = null;
        this.day = null;
    }

    public static calculateAge(dob: Date): Age {
        const now = new Date();
        let year = now.getFullYear() - dob.getFullYear();
        let month: number;
        let day: number;

        if (now.getMonth() >= dob.getMonth())
            month = now.getMonth() - dob.getMonth();
        else {
            year--;
            month = 12 + now.getMonth() - dob.getMonth();
        }

        if (now.getDate() >= dob.getDate())
            day = now.getDate() - dob.getDate();
        else {
            month--;
            day = 31 + now.getDate() - dob.getDate();

            if (month < 0) {
                month = 11;
                year--;
            }
        }

        year = year || null;
        month = month || null;
        day = day || null;

        return { year: year, month: month, day: day };
    }

    public static onAgeInput(year: number, month: number, day: number) {
        let date = new Date();
        date.setFullYear(date.getFullYear() - (year || 0));
        date.setMonth(date.getMonth() - (month || 0));
        date.setDate(date.getDate() - (day || 0));
        return date;
    }
}

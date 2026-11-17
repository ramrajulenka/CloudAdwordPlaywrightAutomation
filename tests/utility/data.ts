 
export class Data {
 
    randomTextWithRange(charLength: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
 
        for (let i = 0; i < charLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
 
        return result;
    }
 
    randomEmail(): string {
        const random = Math.random().toString(36).substring(2, 10);
        return `test${random}@gmail.com`;
    }
 
    randomInvalidEmail(): string {
        const random = Math.random().toString(36).substring(2, 10);
        return `test${random}gmail.com`;
    }
 
    randomMobileNumber(): string {
        // Generates a 10-digit Indian mobile number starting with 9
        return `9${Math.floor(100000000 + Math.random() * 900000000)}`;
    }
 
    randomInvalidMobileNumber(): string {
        // Generates a random 6-digit number
        return `${Math.floor(100000 + Math.random() * 900000)}`;
    }
}
 
 
export function maskUzbekPhoneNumber(phoneNumber: string): string {
    const digitsOnly = phoneNumber.replace(/\D/g, "");

    if (digitsOnly.length === 9 && digitsOnly.startsWith("9")) {
        const formattedNumber = digitsOnly.replace(
            /(\d{3})(\d{2})(\d{2})(\d{2})/,
            "($1) $2-$3-$4"
        );
        return formattedNumber;
    } else {
        return phoneNumber;
    }
}

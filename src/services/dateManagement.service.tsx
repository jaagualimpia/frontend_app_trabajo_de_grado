export const formatDate = (date: Date) => {
    date = new Date(date)

        const day = String(date.getUTCDay()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Month is zero-based
        const year = date.getUTCFullYear();
        return `${day}/${month}/${year}`;
}

export const calculateAge = (birthDate: any) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    return age;
}
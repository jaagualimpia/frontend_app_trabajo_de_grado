const monthsInSpanish: any = {
    0: 'Enero',
    1: 'Febrero',
    2: 'Marzo',
    3: 'Abril',
    4: 'Mayo',
    5: 'Junio',
    6: 'Julio',
    7: 'Agosto',
    8: 'Septiembre',
    9: 'Octubre',
    10: 'Noviembre',
    11: 'Diciembre',
}


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

export const exactDateFormatter = (date: Date | undefined) => {
    date = new Date(date!)

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = date.getHours();
    let minutes:any = date.getMinutes();

    if (minutes < 10) {
        minutes = `0${minutes}`

    }

    console.log(date)

    return  `El día ${day} de ${monthsInSpanish[parseInt(month) - 1]} del año ${year} a las ${hours}:${minutes} GMT-0500 (hora estándar de Colombia)`;
}
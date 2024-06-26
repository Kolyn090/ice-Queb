/**
 * Error messages configuration object.
 */
export const ErrorMessages = {
    // Auth service error messages
    USER_NOT_FOUND: (email: string) => `User with ${email} does not exist in the database`,
    USER_PASSWORD_NOT_CORRECT: (email: string) => `User password is not correct for ${email}`,
    USER_ALREADY_EXISTS: (email: string) => `User with ${email} already exists in the database`,

    // Office Hour service error messages
    OFFICE_HOUR_LIST_NOT_FOUND: (email: string) =>
        `There is office hour document; however, no office hour is found for ${email}`,
    OFFICE_HOUR_DOCUMENT_NOT_FOUND: (email: string) =>
        `No office hour document is found for ${email}`,
    OFFICE_HOUR_ALREADY_EXISTS: 'Office Hour already exists',
    OFFICE_HOUR_NOT_FOUND: 'Office Hour not found',
    OFFICE_HOUR_ID_DOES_NOT_EXISTS: (officeHourID: string) =>
        `Office Hour ID ${officeHourID} does not exist in the office hour collection`,

    OFFICE_HOUR_ID_DUPLICATED: (officeHourID: string, email: string) =>
        `The officeHourID ${officeHourID} is duplicated in the ${email} student office hour document.`,

    // Rate Limiter error messages
    RATE_LIMITER_AUTH:
        'Too many requests to the auth service from this IP, please try again after 2 minutes',
    RATE_LIMITER_OFFICE_HOUR:
        'Too many requests to the office hour service from this IP, please try again after 10 minutes',
};

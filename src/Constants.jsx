export const URL_PATH = "http://localhost:8080"
export const AD_STATUS_SENT_MODERATION = "SENT_MODERATION"
export const AD_STATUS_ON_ADS_BOARD = "ON_ADS_BOARD"
export const AD_STATUS_DECLINE_UNINFORMATIVE = "DECLINE_UNINFORMATIVE"
export const AD_STATUS_DECLINE_RUDE_WORDS = "DECLINE_RUDE_WORDS"
export const AD_STATUS_DECLINE_NUDITY = "DECLINE_NUDITY"
export const AD_STATUS_DECLINE_VIOLENCE = "DECLINE_VIOLENCE"
export const AD_STATUS_DECLINE_FRAUD = "DECLINE_FRAUD"


export function isAdBlocked(status) {
    return (status === AD_STATUS_DECLINE_FRAUD) || (status === AD_STATUS_DECLINE_NUDITY) ||
            (status === AD_STATUS_DECLINE_RUDE_WORDS) || (status === AD_STATUS_DECLINE_UNINFORMATIVE) ||
            (status === AD_STATUS_DECLINE_VIOLENCE)
}

export function getDate(str) {
    const date = new Date(str);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return day+"."+month+"."+year
}
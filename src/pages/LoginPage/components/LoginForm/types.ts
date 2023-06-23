interface IAuthRegisterRequest {
    phone: string;
    sms_code?: string;
}

interface IAuthLoginRequest {
    phone: string;
    sms_code?: string;
}

interface IAuthRegisterResult {
    message: string[];
}
interface IAuthLoginResult {
    apartments: null;
    city_id: null;
    complexes: null;
    created_time: string;
    district_id: null;
    phone: string;
    status: string;
    user_id: number;
}

export type {
    IAuthRegisterRequest,
    IAuthRegisterResult,
    IAuthLoginResult,
    IAuthLoginRequest,
};

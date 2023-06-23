interface IAuthRegisterRequest {
    phone: string;
}

interface IAuthRegisterResult {
    success: boolean;
    code: number;
}

export type { IAuthRegisterRequest, IAuthRegisterResult };

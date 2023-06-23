import { AxiosError } from "axios";
import { useQuery, useMutation } from "react-query";
import { Api } from "@api/axios-config";

interface IEditData<T> {
    url: string;
    item: T;
}

const useGetList = <T>(key: string, url: string) => {
    const service = async () => {
        const data: T = await Api.get(`${url}`);

        return data;
    };
    return useQuery(key, () => service());
};

const useCreate = <T, U, V = Error>(url: string) => {
    return useMutation<U, AxiosError<V>, T>(async (body) => {
        const data: U = await Api.post(url, body);
        return data;
    });
};

const useUpdate = <T, U>() => {
    return useMutation(async ({ url, item }: IEditData<T>) => {
        const data: U = await Api.patch(`${url}`, item);
        return data;
    });
};

const useDelete = <T>(url: string) => {
    return useMutation(async (id: number) => {
        const data: T = await Api.delete(`${url}/${id}`);
        return data;
    });
};

export { useGetList, useCreate, useUpdate, useDelete };

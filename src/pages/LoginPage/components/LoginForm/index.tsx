import { useCallback, useMemo, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { MaskedInput } from "antd-mask-input";
import clsx from "clsx";
import { useCreate, useGetList } from "@hooks/request";
import { authRegisterUrl } from "@constants/urls";
import { IAuthRegisterRequest, IAuthRegisterResult } from "./types";
import styles from "./index.module.scss";

const LoginForm = () => {
    const [stepTwo, setStepTwo] = useState(false);
    const [form] = Form.useForm();

    // Get Request
    const { isLoading: newsLoading, data: newsData } = useGetList<any>(
        "news",
        "/dashboard/builder/view"
    );

    const { mutate: registerPost, isLoading: registerLoading } = useCreate<
        IAuthRegisterRequest,
        IAuthRegisterResult
    >(authRegisterUrl);

    const { mutate: loginPost, isLoading: loginLoading } = useCreate<
        IAuthRegisterRequest,
        IAuthRegisterResult
    >(authRegisterUrl);

    const loading = useMemo(
        () => registerLoading || loginLoading,
        [registerLoading, loginLoading]
    );

    const phoneNumber = Form.useWatch("phone", form);

    const registerSubmit = (values: IAuthRegisterRequest) => {
        loginPost(values, {
            onSuccess: (response) => {
                console.log(response);
                setStepTwo(true);
            },
            onError: (error) => {
                console.log(error, "💥");

                message.error("Malumotlar noto'g'ri kiritildi");
            },
        });
    };

    const loginSubmit = (values: IAuthRegisterRequest) => {
        console.log("hi");
    };

    const handleSubmit = useCallback(
        (values: IAuthRegisterRequest) => {
            stepTwo ? loginSubmit(values) : registerSubmit(values);
        },
        [stepTwo]
    );

    console.log(handleSubmit);

    return (
        <Form
            form={form}
            name="basic"
            layout="vertical"
            className={styles.form}
            onFinish={registerSubmit}
            autoComplete="off"
        >
            {stepTwo && (
                <Form.Item
                    label={`${phoneNumber} raqamiga SMS xabar orqali tasdiqlash kodi yuborildi`}
                    name="sms_code"
                    rules={[
                        {
                            required: true,
                            message: "Please input your sms code!",
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
            )}

            <Form.Item
                className={clsx(stepTwo && styles.hidden_input)}
                label="Telefon raqam"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: "Iltimos telefon raqamni kiriting!",
                    },
                ]}
            >
                <MaskedInput size="large" mask={"+99000000000"} />
            </Form.Item>

            <Button
                className={styles.form__btn}
                loading={loading}
                size="large"
                type="primary"
                htmlType="submit"
            >
                Kirish
            </Button>
        </Form>
    );
};

export default LoginForm;

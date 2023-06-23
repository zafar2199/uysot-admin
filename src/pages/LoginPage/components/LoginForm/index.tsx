import { useMemo, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { MaskedInput } from "antd-mask-input";
import clsx from "clsx";
import { useCreate } from "@hooks/request";
import { useAuthContext } from "@context/AuthProvider";
import { authLoginUrl, authRegisterUrl } from "@constants/urls";
import {
    IAuthLoginRequest,
    IAuthLoginResult,
    IAuthRegisterRequest,
    IAuthRegisterResult,
} from "./types";
import styles from "./index.module.scss";

const LoginForm = () => {
    const [stepTwo, setStepTwo] = useState(false);
    const [form] = Form.useForm();
    const { setTokenAuth } = useAuthContext();

    const { mutate: registerPost, isLoading: registerLoading } = useCreate<
        IAuthRegisterRequest,
        IAuthRegisterResult
    >(authRegisterUrl);

    const { mutate: loginPost, isLoading: loginLoading } = useCreate<
        IAuthLoginRequest,
        IAuthLoginResult
    >(authLoginUrl);

    const loading = useMemo(
        () => registerLoading || loginLoading,
        [registerLoading, loginLoading]
    );

    const phoneNumber = Form.useWatch("phone", form);

    const handleSubmit = (values: IAuthRegisterRequest) => {
        stepTwo
            ? loginPost(values, {
                  onSuccess: () => {
                      setTokenAuth(true);
                  },
                  onError: (error) => {
                      console.log(error.message, "💥");

                      message.error("Malumotlar noto'g'ri kiritildi");
                  },
              })
            : registerPost(values, {
                  onSuccess: (response) => {
                      setStepTwo(true);

                      message.success("Sms yuborildi");
                      console.log(response);
                  },
                  onError: (error) => {
                      console.log(error, "💥");

                      message.error("Malumotlar noto'g'ri kiritildi");
                  },
              });
    };

    return (
        <Form
            form={form}
            name="basic"
            layout="vertical"
            className={styles.form}
            onFinish={handleSubmit}
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
                <MaskedInput size="large" mask={"+990000000000"} />
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

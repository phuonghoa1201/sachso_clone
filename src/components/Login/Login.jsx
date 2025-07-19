import { Modal, Button, Form, Input, message } from "antd";
import modalImg from '../../assets/modalImg.png';
import styles from './Login.module.css';
import React, { useState } from "react";
import { getProfile, login } from "../../services/authService";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

function Login({ open, onClose, onLoginSuccess }) {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const data = await login(values.email, values.password);
            console.log('Đăng nhập thành công:', data);

            localStorage.setItem('access_token', data.access_token);
// Take profile user
            const profile = await getProfile(data.access_token);
            localStorage.setItem('user', JSON.stringify({
                name: profile.name,
                avatar: profile.avatar
            }));

            message.success('Đăng nhập thành công !');
            onClose();
            onLoginSuccess();
        } catch (error) {
            console.error(error);
            message.error(error.message || 'Đăng nhập thất bại!');
        } finally {
            setLoading(false);
        }
    };

    // Xu ly modal quen mat khau
    const [openForgotModal, setOpenForgotModal] = useState(false);

    // Open Fg Modal
    const handleOpenForgotModel = () => setOpenForgotModal(true);
    // Close Fg Modal
    const handleCloseForgotModal = () => setOpenForgotModal(false);

    return (
        <div>
        <Modal
            title="ĐĂNG NHẬP"
            centered
            open={open}
            onCancel={onClose}
            footer={null}
            className={styles.modalBody}
        >
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 h-full">
                <div className="w-full md:w-1/2">
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                        >
                            <Input type="email" />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                        >
                            <Input type="password" />
    

                        </Form.Item>
                         <button type="button" className="text-blue-700 py-4" onClick={handleOpenForgotModel} >
                                Quên mật khẩu ?
                            </button>

                        <Form.Item>
                            <Button
                                className="w-full"
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                            >
                                ĐĂNG NHẬP
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="w-full md:w-1/2 hidden md:block">
                    <img className="w-full h-full" src={modalImg} alt="Login visual" />
                </div>
            </div>
        </Modal>
        <ForgotPassword openForgot={openForgotModal} onCloseForgot={handleCloseForgotModal}/>
        </div>
    );
}

export default Login;

import React from 'react';
import { WingBlank, WhiteSpace, List, InputItem, Button ,Toast} from 'antd-mobile';
import { createForm } from 'rc-form';
class Login extends React.Component {
    onSubmit = () => {
        this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                this.props.history.push("/mine")
            } else {
                Toast.info('账户名或密码错误！', 3, null, false);
            }
        });
    }
    
    validateAccount = (rule, value, callback) => {
        if (value && value.length > 4) {
            callback();
        } else {
            callback(new Error('At least four characters for account'));
        }
    }
    render() {
        const { getFieldProps } = this.props.form;

        return (
            <div style={bgName}>
                <WingBlank size="lg" style={{ marginTop: '100px' }}>
                    <img src="assets/login_pic.png" />
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                    <List>
                        <InputItem
                            {...getFieldProps('account', {
                                rules: [
                                    { required: true, message: '请输入您的账号' },
                                    { validator: this.validateAccount },
                                ],
                            })}
                            clear
                            placeholder="admin">
                            <div style={{ backgroundImage: 'url(assets/login_acc.png)', backgroundSize: 'cover', height: '30px', width: '30px' }} />
                        </InputItem>
                        <InputItem
                            {...getFieldProps('password', {
                                rules: [
                                    { required: true, message: '请输入您的密码' }
                                ],
                            })}
                            type="password"
                            clear
                            placeholder="123">
                            <div style={{ backgroundImage: 'url(assets/login_pas.png)', backgroundSize: 'cover', height: '26px', width: '26px' }} />
                        </InputItem>
                    </List>
                    <WhiteSpace size="lg" />
                    <Button type="primary" onClick={this.onSubmit}>确认</Button>
                </WingBlank>
            </div>
        )
    }

}
const BasicInputWrapper = createForm()(Login);
export default BasicInputWrapper;
const bgName = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundImage: 'url("https://hbimg.huabanimg.com/1242f5619b5d5cd48e86f360fa4a542a6aa99fc3d4f49-QBdqsW_fw658")',
    backgroundSize: 'cover',
    textAlign: 'center',
    zIndex: 2
}
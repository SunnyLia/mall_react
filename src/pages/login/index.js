import React from 'react';
import { WingBlank, WhiteSpace, List, InputItem, Button } from 'antd-mobile';
class Cart extends React.Component {
    onSubmit = () => {
        this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(this.props.form.getFieldsValue());
            } else {
                alert('Validation failed');
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
        console.log(this.props);
        const { getFieldProps, getFieldError } = this.props.form;

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
                                    { required: true, message: 'Please input account' },
                                    { validator: this.validateAccount },
                                ],
                            })}
                            clear
                            error={!!getFieldError('account')}
                            onErrorClick={() => {
                                alert(getFieldError('account').join('、'));
                            }}
                            placeholder="请输入您的账号">
                            <div style={{ backgroundImage: 'url(assets/login_acc.png)', backgroundSize: 'cover', height: '30px', width: '30px' }} />
                        </InputItem>
                        <InputItem
                            {...getFieldProps('password')}
                            type="password"
                            placeholder="请输入您的密码">
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
export default Cart;
const bgName = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundImage: 'url("https://hbimg.huabanimg.com/1242f5619b5d5cd48e86f360fa4a542a6aa99fc3d4f49-QBdqsW_fw658")',
    backgroundSize: 'cover',
    textAlign: 'center',
    zIndex: 2
}
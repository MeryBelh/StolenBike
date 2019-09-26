import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { Alert, Checkbox } from 'antd';
import LoginComponents from './components/Login';
import styles from './style.less';
import { Dispatch } from 'redux';
import { IStateType } from './model';
import { FormComponentProps } from 'antd/es/form';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Redirect } from 'umi';
import { getAccessToken } from '@/pages/user/login/utils/utils';

const { UserName, Password, Submit } = LoginComponents;

interface LoginProps {
  dispatch: Dispatch<any>;
  userLogin: IStateType;
  submitting: boolean;
}
interface LoginState {
  autoLogin: boolean;
}
export interface FromDataType {
  userName: string;
  password: string;
}

@connect(
  ({
    userLogin,
    loading,
  }: {
    userLogin: IStateType;
    loading: {
      effects: {
        [key: string]: string;
      };
    };
  }) => ({
    userLogin,
    submitting: loading.effects['userLogin/login'],
  }),
)
class Login extends Component<LoginProps, LoginState> {
  state: LoginState = {
    autoLogin: true,
  };
  loginForm: FormComponentProps['form'] | undefined | null;

  handleSubmit = (err: any, values: FromDataType) => {
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'userLogin/login',
        payload: {
          ...values,
        },
      });
    }
  };

  changeAutoLogin = (e: CheckboxChangeEvent) => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = (content: string) => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { userLogin, submitting } = this.props;
    const { status } = userLogin;
    const { autoLogin } = this.state;
    return (
      <div className={styles.main}>
        <LoginComponents
          onSubmit={this.handleSubmit}
          ref={(form: any) => {
            this.loginForm = form;
          }}
        >
          <div>
            {status === 'error' &&
              !submitting &&
              this.renderMessage(
                formatMessage({ id: 'user-login.login.message-invalid-credentials' }),
              )}
          </div>
          <UserName
            name="userName"
            placeholder={formatMessage({ id: 'user-login.login.userName' })}
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'user-login.userName.required' }),
              },
            ]}
          />
          <Password
            name="password"
            placeholder={formatMessage({ id: 'user-login.login.password' })}
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'user-login.password.required' }),
              },
            ]}
            onPressEnter={() => this.loginForm && this.loginForm.validateFields(this.handleSubmit)}
          />

          <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              <FormattedMessage id="user-login.login.remember-me" />
            </Checkbox>
            <a style={{ float: 'right' }} href="">
              <FormattedMessage id="user-login.login.forgot-password" />
            </a>
          </div>
          <Submit loading={submitting}>
            <FormattedMessage id="user-login.login.login" />
          </Submit>
        </LoginComponents>
      </div>
    );
  }
}

export default Login;

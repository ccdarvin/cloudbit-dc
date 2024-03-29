import {
  LoginPageProps,
  LoginFormTypes,
  useLink,
  useRouterType,
  useActiveAuthProvider,
  useLogin,
  useTranslate,
  useRouterContext,
} from "@refinedev/core"
import {
  Row,
  Col,
  Layout,
  Card,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
  CardProps,
  LayoutProps,
  Divider,
  FormProps,
  theme,
  Grid,
} from "antd";
import ThemedTitleV2 from "../Layout/Title";

const { useToken } = theme

type LoginProps = LoginPageProps<LayoutProps, CardProps, FormProps>;
/**
 * **refine** has a default login page form which is served on `/login` route when the `authProvider` configuration is provided.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/antd-auth-page/#login} for more details.
 */
export default function Login ({
  providers,
  registerLink,
  forgotPasswordLink,
  rememberMe,
  contentProps,
  wrapperProps,
  renderContent,
  formProps,
  title,
}: LoginProps){
  const { token } = useToken();
  const [form] = Form.useForm<LoginFormTypes>();
  const translate = useTranslate();
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

  const authProvider = useActiveAuthProvider();
  const { mutate: login, isLoading } = useLogin<LoginFormTypes>({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });

  const screens = Grid.useBreakpoint()

  const PageTitle =
    title === false ? null : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "32px",
          fontSize: "20px",
        }}
      >
        {title ?? <ThemedTitleV2 collapsed={false} />}
      </div>
    );

  const CardTitle = (
    <Typography.Title
      level={3}
      style={{
        color: token.colorPrimaryTextHover,
      }}
    >
      {translate("pages.login.title", "Iniciar sesión")}
    </Typography.Title>
  );

  const renderProviders = () => {
    if (providers && providers.length > 0) {
      return (
        <>
          {providers.map((provider) => {
            return (
              <Button
                key={provider.name}
                type="default"
                block
                icon={provider.icon}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: "8px",
                }}
                onClick={() =>
                  login({
                    providerName: provider.name,
                  })
                }
              >
                {provider.label}
              </Button>
            );
          })}
          <Divider>
            <Typography.Text
              style={{
                color: token.colorTextLabel,
              }}
            >
              {translate("pages.login.divider", "or")}
            </Typography.Text>
          </Divider>
        </>
      );
    }
    return null;
  };

  const CardContent = (
    <Card
      title={CardTitle}
      style={{
        backgroundColor: token.colorBgElevated,
        maxWidth: "400px",
        margin: "0 auto",
      }}
      {...(contentProps ?? {})}
    >
      {renderProviders()}
      <Form<LoginFormTypes>
        size="large"
        layout="vertical"
        form={form}
        onFinish={(values) => login(values)}
        requiredMark={false}
        initialValues={{
          remember: false,
        }}
        {...formProps}
      >
        <Form.Item
          name="email"
          label={translate("pages.login.fields.email", "Correo electrónico")}
          rules={[
            { required: true },
            {
              type: "email",
              message: translate(
                "pages.login.errors.validEmail",
                "El correo electrónico no es válido"
              ),
            },
          ]}
        >
          <Input
            placeholder={translate("pages.login.fields.email", "Correo electrónico")}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={translate("pages.login.fields.password", "Contraseña")}
          rules={[{ required: true }]}
        >
          <Input type="password" placeholder="●●●●●●●●" />
        </Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          {rememberMe ?? (
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox
                style={{
                  fontSize: "12px",
                }}
              >
                {translate("pages.login.buttons.rememberMe", "Recuerdame")}
              </Checkbox>
            </Form.Item>
          )}
          {forgotPasswordLink ?? (
            <ActiveLink
              style={{
                color: token.colorPrimaryTextHover,
                fontSize: "12px",
                marginLeft: "auto",
              }}
              to="/forgot-password"
            >
              {translate(
                "pages.login.buttons.forgotPassword",
                "¿Olvidaste tu contraseña?"
              )}
            </ActiveLink>
          )}
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            block
          >
            {translate("pages.login.signin", "Iniciar sesión")}
          </Button>
        </Form.Item>
      </Form>
      <div style={{ marginTop: 8 }}>
        {registerLink ?? (
          <Typography.Text style={{ fontSize: 12 }}>
            {translate(
              "pages.login.buttons.noAccount",
              "¿No tienes una cuenta?"
            )}{" "}
            <ActiveLink
              to="/register"
              style={{
                fontWeight: "bold",
                color: token.colorPrimaryTextHover,
              }}
            >
              {translate("pages.login.signup", "Registrate")}
            </ActiveLink>
          </Typography.Text>
        )}
      </div>
    </Card>
  );

  return <Layout>
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Col style={{
          padding: "0 24px",
          minWidth: "30%",
        }}>
          {renderContent ? (
            renderContent(CardContent, PageTitle)
          ) : (
            <>
              {PageTitle}
              {CardContent}
            </>
          )}
        </Col>
        <Col flex='auto'
          style={{
            display: screens.xs ? "none" : "block",
            height: "100vh",
            backgroundColor: token.colorPrimaryActive,
          }}
        >
        </Col>
      </Row>
    </Layout>
}

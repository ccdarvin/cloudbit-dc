import React from "react";
import {
  RegisterPageProps,
  RegisterFormTypes,
  useRouterType,
  useLink,
  useActiveAuthProvider,
  useTranslate,
  useRouterContext,
  useRegister,
} from "@refinedev/core";
import { ThemedTitleV2 as ThemedTitle } from "@refinedev/antd";
import {
  Row,
  Col,
  Layout,
  Card,
  Typography,
  Form,
  Input,
  Button,
  LayoutProps,
  CardProps,
  FormProps,
  Divider,
  theme,
  Grid,
} from "antd";

const { Text, Title } = Typography;
const { useToken } = theme;

type RegisterProps = RegisterPageProps<LayoutProps, CardProps, FormProps>;
/**
 * **refine** has register page form which is served on `/register` route when the `authProvider` configuration is provided.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/antd-auth-page/#register} for more details.
 */
export default function RegisterPage ({
  providers,
  loginLink,
  wrapperProps,
  contentProps,
  renderContent,
  formProps,
  title,
}: RegisterProps) {
  const { token } = useToken();
  const [form] = Form.useForm<RegisterFormTypes>();
  const translate = useTranslate();
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

  const authProvider = useActiveAuthProvider();
  const { mutate: register, isLoading } = useRegister<RegisterFormTypes>()

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
        {title ?? <ThemedTitle collapsed={false} />}
      </div>
    );

  const CardTitle = (
    <Title
      level={3}
      style={{
        color: token.colorPrimaryTextHover,
      }}
    >
      {translate("pages.register.title", "Crea una cuenta")}
    </Title>
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
                  register({
                    providerName: provider.name,
                  })
                }
              >
                {provider.label}
              </Button>
            );
          })}
          <Divider>
            <Text
              style={{
                color: token.colorTextLabel,
              }}
            >
              {translate("pages.login.divider", "o")}
            </Text>
          </Divider>
        </>
      );
    }
    return null;
  };
  console.log(register)
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
      <Form<RegisterFormTypes>
        layout="vertical"
        form={form}
        onFinish={(values) => {
          const data = {
            ...values,
            username: values.email,
          }
          register(data, {
            onSuccess: (data) => {
              console.log(data)
            }
          })
        }}
        requiredMark={false}
        {...formProps}
      >
        <Form.Item
          name="email"
          label={translate("pages.register.email", "Correo electrónico")}
          rules={[
            { required: true },
            {
              type: "email",
              message: translate(
                "pages.register.errors.validEmail",
                "El correo electrónico no es válido"
              ),
            },
          ]}
        >
          <Input
            size="large"
            placeholder={translate("pages.register.fields.email", "Correo electrónico")}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label={translate("pages.register.fields.password", "Contraseña")}
          rules={[{ required: true }]}
        >
          <Input type="password" placeholder="●●●●●●●●" size="large" />
        </Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          {loginLink ?? (
            <Text
              style={{
                fontSize: 12,
                marginLeft: "auto",
              }}
            >
              {translate("pages.login.buttons.haveAccount", "¿Tienes una cuenta?")}{" "}
              <ActiveLink
                style={{
                  fontWeight: "bold",
                  color: token.colorPrimaryTextHover,
                }}
                to="/login"
              >
                {translate("pages.login.signin", "Iniciar sesión")}
              </ActiveLink>
            </Text>
          )}
        </div>

        <Form.Item
          style={{
            marginBottom: 0,
          }}
        >
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            loading={isLoading}
            block
          >
            {translate("pages.register.buttons.submit", "Registrate")}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );

  return (
    <Layout {...(wrapperProps ?? {})}>
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
  );
};

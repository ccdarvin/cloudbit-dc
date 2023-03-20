import {
    createTheme,
    legacyLogicalPropertiesTransformer,
    StyleProvider,
    useStyleRegister,
  } from '@ant-design/cssinjs'
  
  
export default function StyleCalendar({
    children,
}: {
    children: React.ReactNode;
}){
    useStyleRegister(
        {
            theme: createTheme(() => ({})),
            token: {},
            path: ['.logical-properties-box'],
        },
        () => ({
            '.logical-properties-box': {
            width: '300px',
            height: 100,
            backgroundColor: 'pink',
            border: '1px solid #000',
            position: 'relative',
            // css logical-properties
            paddingInline: 10,
            borderBlockEndWidth: 3,
            marginBlock: 10,
            borderEndEndRadius: '50%',
            inset: 5,
            },
        }),
    );
  
    return   <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
        {children}
    </StyleProvider>
  }
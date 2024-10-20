import * as React from 'react';
import { Text } from 'react-native';
import { AnimateableTextProps } from './TextProps';

export const AnimateableText = React.forwardRef(
  (props: AnimateableTextProps, ref) => {
    const [text, setText] = React.useState<string | undefined>(props.text);
    const animatedTextRef = React.useRef<Text>(null);

    React.useImperativeHandle(
      ref,
      () => ({
        setNativeProps: (nativeProps: AnimateableTextProps) => {
          if (animatedTextRef.current && nativeProps.text) {
            setText(nativeProps?.text);
          }
        },
      }),
      []
    );

    return (
      <Text ref={animatedTextRef} {...props}>
        {text}
      </Text>
    );
  }
);

import { InputAtoms } from "@/components/atoms";

interface InputProps extends InputAtoms.InputRootProps {
  containerProps?: InputAtoms.InputContainerProps;
}

function Input({ containerProps, ...props }: InputProps) {
  return (
    <InputAtoms.Container {...containerProps}>
      <InputAtoms.Root {...props} />
    </InputAtoms.Container>
  );
}

export { Input };

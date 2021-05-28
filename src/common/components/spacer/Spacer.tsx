const pxForSpacerSize: Record<string, number> = {
  small: 8,
  medium: 12,
  large: 30,
  xlarge: 40,
  xxlarge: 60,
};

interface spacerOwnProps {
  size: string;
}

const Spacer = (props: spacerOwnProps) => {
  const { size } = props;

  return <div style={{ height: `${pxForSpacerSize[size]}px` }} />;
};

export default Spacer;

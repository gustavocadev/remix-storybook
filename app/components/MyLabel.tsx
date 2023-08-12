import './MyLabel.css';

type Props = {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Capitalize all text
   */
  allCaps?: boolean;
  /**
   * Color of the text
   * @default text-primary
   * */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Custom color of the text
   * @default #000
   * */
  fontColor?: string;
};

/**
 * AllCaps: boolean,
 * color: text-primary | text-secondary | text-tertiary
 * fontColor: string, text del span
 */

const MyLabel = ({
  label,
  size,
  allCaps,
  color = 'text-tertiary',
  fontColor,
}: Props) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={{
        textTransform: allCaps ? 'uppercase' : 'none',
        color: fontColor ? fontColor : '',
      }}
    >
      {label}
    </span>
  );
};

export default MyLabel;

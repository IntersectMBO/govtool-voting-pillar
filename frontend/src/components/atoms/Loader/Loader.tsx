import './Loader.css';
import { ICONS } from '../../../consts';

type Props = {
  size: number;
};
/**
 * Renders a loader component with an optional size.
 *
 * @param {Object} props - The component props.
 * @param {number} props.size - The size of the loader component. Default is 100.
 * @returns {JSX.Element} The loader component.
 */
export const Loader = ({ size = 100 }: Props) => (
  <div style={{ width: size, height: size, margin: '0 auto' }}>
    <img
      src={ICONS.loaderIcon}
      style={{ animation: `spin 2s linear infinite` }}
      alt="loader"
    />
  </div>
);

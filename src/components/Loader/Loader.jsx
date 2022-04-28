import { memo } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './loader.module.scss';

function LoaderComponent() {
  return (
    <div className={styles.overlay}>
      <Loader
        type="Grid"
        heigth="100"
        width="100"
        color="#aa73d6"
        timeout={1000}
        ariaLabel="grid-loading"
      />
    </div>
  );
}

export default memo(LoaderComponent);

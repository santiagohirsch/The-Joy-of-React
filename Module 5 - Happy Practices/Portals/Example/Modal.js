import React from 'react';
import { createPortal } from 'react-dom';

import { X as Close } from 'react-feather';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import VisuallyHidden from './VisuallyHidden'
import styles from './Modal.module.css';

function Modal({ title, handleDismiss, children }) {
  useEscapeKey(handleDismiss);
  
  return createPortal(
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div
            className={styles.backdrop}
            onClick={handleDismiss}
          />
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              className={styles.closeBtn}
              onClick={handleDismiss}
            >
              <Close />
              <VisuallyHidden>
                Dismiss modal
              </VisuallyHidden>
            </button>
            <h2>{title}</h2>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>,
    document.querySelector('#modal-root')
  );
}

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]);
}

export default Modal;
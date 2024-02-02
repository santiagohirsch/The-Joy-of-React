import React from 'react';

import useToggle from './use-toggle';
import Modal from './Modal';
import LoginForm from './LoginForm';
import styles from './Header.module.css';

function Header() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  
  return (
    <header className={styles.wrapper}>
      {isModalOpen && (
        <Modal
          title="Log in"
          handleDismiss={() => toggleIsModalOpen(false)}
        >
          <LoginForm />
        </Modal>
      )}
      <button onClick={toggleIsModalOpen}>
        Log in
      </button>
    </header>
  );
}

export default Header;
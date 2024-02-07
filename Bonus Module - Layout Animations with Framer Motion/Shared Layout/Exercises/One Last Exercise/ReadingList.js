import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';
import styles from './ReadingList.module.css';

function ReadingList({ books, handleRemoveBook }) {
  const [highlightedIndex, setHighlightedIndex] =
    React.useState(null);

  return (
    <>
      <div
        className={styles.wrapper}
        onMouseLeave={() => {
          setHighlightedIndex(null);
        }}
      >
        <h2>Reading List</h2>
        <ol className={styles.books}>
          {books.map((book, bookIndex) => {
            const reverseBookIndex =
              books.length - bookIndex - 1;

            let height = Math.max(
              50 - reverseBookIndex * 5,
              10
            );

            if (bookIndex === highlightedIndex) {
              height = 100;
            }

            return (
              <li
                key={book.isbn}
                style={{ height }}
                onMouseEnter={() => {
                  setHighlightedIndex(bookIndex);
                }}
              >
                <motion.img
                  layoutId={`book-cover-${book.isbn}`}
                  alt={book.name}
                  src={book.coverSrc}
                  draggable={false}
                  className={styles.bookCover}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 60,
                  }}
                />
                <motion.button
                  layout="position"
                  className={styles.deleteBtn}
                  onClick={() =>
                    handleRemoveBook(book)
                  }
                  onFocus={() => {
                    setHighlightedIndex(bookIndex);
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 60,
                  }}
                >
                  <X />
                  <VisuallyHidden>
                    Remove {book.name}
                  </VisuallyHidden>
                </motion.button>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default ReadingList;
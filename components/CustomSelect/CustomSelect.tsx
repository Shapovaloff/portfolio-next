import { FC, useEffect, useState } from 'react';
import Icon from '../Icon/Icon';
import { CustomSelectProps } from './CustomSelect.interface';
import styles from './CustomSelect.module.scss';

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  defaultLabel,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultLabel);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string, label: string) => {
    setSelectedValue(label);
    setIsOpen(false);
    onSelect(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const selectElement = document.querySelector(
        `.${styles['custom-select']}`
      );
      if (selectElement && !selectElement.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styles['custom-select']} ${
        isOpen ? styles['is-open'] : ''
      }`}
    >
      <button
        className={styles['custom-select__button']}
        type="button"
        aria-label="Выберите одну из опций"
        onClick={toggleDropdown}
      >
        <span className={styles['custom-select__text']}>{selectedValue}</span>
        <span className={styles['custom-select__icon']}>
          <Icon name="icon-arrow-select" />
        </span>
      </button>

      {isOpen && (
        <ul className={styles['custom-select__list']} role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              className={styles['custom-select__item']}
              tabIndex={0}
              role="option"
              aria-selected={selectedValue === option.label}
              onClick={() => handleSelect(option.value, option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;

import React from 'react';
import styles from 'styles/index.module.scss';

type Props = {
  isChecked: boolean;
  pref: Prefecture;
  onChange: (checked: boolean) => void;
};

const PrefectureCheckbox: React.FC<Props> = (props: Props) => {
  const { isChecked, pref, onChange } = props;

  return (
    <div className={styles.checkBox}>
      <input
        type="checkbox"
        id={pref.code.toString()}
        checked={isChecked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <label htmlFor={pref.code.toString()}>{pref.name}</label>
    </div>
  );
};

export default PrefectureCheckbox;

import s from "./CamperOptions.module.css";

const CamperOptions = () => {
  return (
    <ul className={s.options}>
      {options.map((item) => (
        <li key={item} className={s.option}>
          <p className={s.optionText}>
            {item.replace(item[0], item[0].toUpperCase())}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CamperOptions;

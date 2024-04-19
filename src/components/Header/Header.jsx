import './styles.scss';

export const Header = () => {
  return (
    <div className="header fixed top-0 left-0 w-full px-4 py-4 bg-opacity-5 flex justify-between">
      <img src="/src/assets/icons/logo.svg" />
      <img src="/src/assets/icons/burger-menu.svg" />
    </div>
  );
};

import "bootstrap-icons/font/bootstrap-icons.css";

interface ICON {
  name: string;
  color: string;
  size: string;
}

const Icon = ({ name, size = "1rem", color }: ICON) => {
  return (
    <i className={`bi bi-${name}`} style={{ fontSize: size, color: color }}></i>
  );
};

export default Icon;

// You can place this Button component in a new file like src/components/Button.jsx or directly use it in your pages/components.

function Button({ label, variant }) {
  const base = "px-4 py-2 rounded";
  const styles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-300 text-black",
    danger: "bg-red-500 text-white"
  };
  return <button className={`${base} ${styles[variant]}`}>{label}</button>;
}

export default Button;
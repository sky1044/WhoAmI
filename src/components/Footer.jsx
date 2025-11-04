import logo from "../assets/logo.png";

export default function Footer({ className }) {
  return (
    <footer className={`${className}`}>
      <div className="flex max-w-screen flex-col p-4 text-white">
        <small>Copyright 2025. WhereIsIt All rights reserved.</small>
        {/* <img src={logo} alt="logo" className="user-drag-none w-md" /> */}
      </div>
    </footer>
  );
}

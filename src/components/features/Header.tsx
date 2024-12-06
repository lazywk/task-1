import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="border-b shadow-sm py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <p className="text-2xl">Logo</p>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

import Link from 'next/link';

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline flex items-center">
        {/* Use the image directly from the public folder */}
        <img
          src="/assets/logo-symbol.png" // Correct relative path from public
          alt="MapInsights Logo"
          width={32}
          height={32}
          className="mr-2" // Adjust margin to space logo from the text
        />
        MapInsights.co
      </Link>
    </h2>
  );
};

export default Header;

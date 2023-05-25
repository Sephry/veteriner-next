import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  let session = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flext-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Vet Vet Logo"
          className="object-contain"
          height={30}
          width={30}
        />
        <p className="logo_text">Vet Vet</p>
      </Link>

      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/add-animal" className="black_btn">
            Add Animal
          </Link>
          <button type="button" className="outline_btn">
            Sign Out
          </button>

          <Link href="/profile">
            <Image
              src="/assets/images/logo.svg"
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

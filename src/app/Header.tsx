import Image from 'next/image';
import homeImage from '../../public/images/home.png';
import Link from 'next/link';
import { headerLinksClass } from '@/styles/headerLinks';

export default function Header() {
  return (
    <div className="p-6 mb-2 flex justify-between">
      <Link href="/">
        <Image width={30} src={homeImage} alt={'Home icon'} />
      </Link>
      <div className="flex gap-2">
        <Link href="sign-up" className={`${headerLinksClass}`}>
          Sign up
        </Link>
        <Link href="sign-in" className={`${headerLinksClass}  ring-2 ring-gray-500 hover:ring-gray-700 hover:bg-white`}>
          Sign in
        </Link>
      </div>
    </div>
  );
}

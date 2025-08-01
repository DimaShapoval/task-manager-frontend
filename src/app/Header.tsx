import Image from 'next/image';
import homeImage from '../../public/images/home.png';

export default function Header() {
  return (
    <div className="p-4 mb-2">
      <Image width={30} src={homeImage} alt={'Home icon'} />
    </div>
  );
}

import Image from 'next/image'
import styles from './NavBar.module.scss'
import Link from 'next/link'


const NavBar = () => {
    return (
        <div
        className={styles.main}>
            <Image 
            src="/post.jpeg" 
            width={80}
            height={80}
            alt="Post image"
            />
            <div className={styles.navBar}>
                <Link href="/dashboard/home" className={styles.navLink}>Home</Link>
                <Link href="/dashboard/posts" className={styles.navLink}>Posts</Link>

            </div>
        </div>
    );
  };
  
  export default NavBar;
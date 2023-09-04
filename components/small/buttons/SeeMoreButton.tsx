import React from "react";
import Link from "next/link";
import styles from './Buttons.module.scss'

export const SeeMoreButton: React.FC = () => {
    return (
        <Link href='/about' legacyBehavior passHref>
            <a className={styles.seeMore}>
                <span>See More</span>
            </a>
        </Link>
    )
}
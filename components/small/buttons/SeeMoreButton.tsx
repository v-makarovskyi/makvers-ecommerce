import React from "react";
import Link from "next/link";
import styles from './Buttons.module.scss'

export const SeeMoreButton: React.FC = () => {
    return (
        <Link href='/about'>
            <a>
                <span>See More</span>
            </a>
        </Link>
    )
}
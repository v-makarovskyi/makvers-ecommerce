import React from "react";
import { Image } from "react-bootstrap";
import styles from './MoreInfo.module.scss'

interface MoreInfoChildren {
    children?: React.ReactNode
}

export const MoreInfo: React.FC<MoreInfoChildren> = ({ children }) => {
    return (
        <div className={styles.moreInfoContainer}>
            <div className={styles.moreInfoWrapper}>
                <Image className={styles.img} fluid src='/assets/BlueEllipse.png' alt='#' />
                <div className={styles.moreInfoContent}>
                    { children && children }
                </div>
            </div>
        </div>
    )
}
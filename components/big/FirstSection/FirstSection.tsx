import React from 'react'
import styles from './FirstSection.module.scss'
import ReactPlayer from 'react-player'
import { Container } from 'react-bootstrap'
import { SeeMoreButton } from '@/components/small/buttons'
import { MoreInfo } from '@/components/average/MoreInfo'

interface FirstSectionProps {
  info?: string,
}

export const FirstSection:React.FC<FirstSectionProps> =  ({ info }) => {
  return (
    <Container fluid className={styles.customContainer}>
      <div className={styles.videoWrapper}>
        <ReactPlayer 
          width='100%'
          height='100%'
          url='/assets/GlobeVideo.mp4'
          playing
          muted
          config={{
            file: {
              attributes: {
                muted: true,
                autoPlay: true,
                loop: true,
                poster: '/assets/GlobeVideo.gif'
              }
            }
          }}
        />
      </div>
      <div className={styles.divOverflow}></div>
      <div className={styles.phantomDiv}></div>
      <MoreInfo>
        <p>{info}</p>
        <SeeMoreButton />
      </MoreInfo>
    </Container>
  )
}

FirstSection.defaultProps = {
  info: 'Узнайте, почему компания MAKVERS является одним из лидеров ювелирного рынка по всему миру.'
}

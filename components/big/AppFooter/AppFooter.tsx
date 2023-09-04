import React from 'react'
import Link from 'next/link'
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import { BaseNavlinkType } from '@/types/Base'
import styles from './AppFooter.module.scss'
import { string } from 'prop-types'

type supportLinks = string
type socialMediaIcon = string

interface AppFooterProps {
  linksCategories: BaseNavlinkType[],
  supportLinks: supportLinks[],
  socialMediaIcons: socialMediaIcon[],
}


export const AppFooter: React.FC<AppFooterProps> = ({linksCategories, supportLinks, socialMediaIcons}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.jumbotron}>
        <Row className='justify-content-center'>
          <Col xs={12} sm={8} md={10} lg={6} className='justify-content-center'>
              <div className='text-center'>
                <h1 className={styles.footerSlogan}>
                Мы верим в смысл, красоту и силу ювелирных изделий.
                </h1>
              </div>
          </Col>
        </Row>
        <Row className={styles.rowContentWrapper}>
          <Col xs={4} md={2} lg={1}>
            <div className='text-center'>
              <h1 className={styles.headers}>Get Help</h1>
              <div className={styles.links}>
                {
                  supportLinks.map((link) => (
                    <a className={styles.a} key={link} href='#'>
                      { link }
                    </a>
                  ))
                }
              </div>
            </div>
          </Col>
          <Col xs={4} md={2} lg={1}>
            <div className='text-center'>
              <h1 className={styles.headers}>Categories</h1>
              <div className={styles.links}>
                {
                  linksCategories.map((link) => (
                    <Link key={link.name} href={`/categories/${link.path}`} legacyBehavior passHref shallow>
                      <a className={styles.a}>
                        { link.name }
                      </a>
                    </Link>
                  ))
                }
              </div>
            </div>
          </Col>
          <Col xs={4} md={2} lg={1}>
            <div className='text-center'>
              <h1 className={styles.headers}>Contacts Us</h1>
              <div className={styles.linksMedia}>
                {
                  socialMediaIcons.map((icon) => (
                    <a className={styles.a} key={icon} href='#'>
                      <i className={icon}></i>
                    </a>
                  ))
                }
              </div>
            </div>
          </Col>
          <Col xs={4} md={3} className='d-flex align-items-center justify-content-center'>
            <Link href='/about' passHref legacyBehavior>
              <a className={styles.a}>
                <h1 className={styles.aboutLink}>About Us</h1>
              </a>
            </Link>
          </Col>
          <Col xs={8} md={3} className='mt-4'>
            <h1 className={styles.newLetterForm}>Suscribe to our Newsletter</h1>
            <div>
              <InputGroup>
                <FormControl className={styles.customInput} placeholder='someadress@someemail.com' />
                <Button className={styles.customButton} variant='primary'>Suscribe</Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
        <div className={styles.smallLettersWrapper}>
          <small className={styles.smallLetter}>
            Makvers - {new Date().getFullYear()}
          </small>
        </div>
      </div>
    </footer>
  )
}


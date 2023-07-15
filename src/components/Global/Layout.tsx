import React, { ReactNode, useState, createContext } from 'react'
import Header from '../Header/Header'
import Head from 'next/head'
import styles from './Layout.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal/Modal'
import { AmplifyUser } from '@aws-amplify/ui'

export const ModalContext = createContext<{
  modalVisible: boolean
  setModalVisible: (visible: boolean) => void
}>({
  modalVisible: false,
  setModalVisible: () => { }
})

interface LayoutProps {
  children: ReactNode
  user: AmplifyUser | undefined
  signOut: (() => void) | undefined
}
const Layout: React.FC<LayoutProps> = ({ children, user, signOut }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  console.log(user)
  return (
    <div style={{ marginTop: headerHeight }}>
      <Head>
        <title>tmp</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ModalContext.Provider value={{ modalVisible, setModalVisible }}>
        {modalVisible && <Modal />}
      </ModalContext.Provider>
      <Header setHeaderHeight={setHeaderHeight} />
      <FontAwesomeIcon icon={faPlus} className={styles['plus-icon']} onClick={() => setModalVisible(true)} />
      <div className={styles['layout-container']}>{children}</div>
      <footer className={styles['layout-footer']}>
        <hr />
        <button onClick={signOut}>Sign Out</button>
      </footer>
    </div>
  )
}

export default Layout
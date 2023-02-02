import styles from './Footer.module.css';
import HenryLogo from '../../assets/images/logo-henry.png';
import Vane from '../../assets/images/vane.jpg';
import Daniel from '../../assets/images/daniel.png';
import Felipe from '../../assets/images/felipe.jpg';
import Carlos from '../../assets/images/carlos.jpg';
import Dario from '../../assets/images/dario.jpg';
import Dante from '../../assets/images/choque.jpg';
import Jose from '../../assets/images/jose.png';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.infoContainer}>
        <h3 className={styles.logoApp}>BOOK YOU</h3>
        <p>&#169; 2023 All Rights Reserved.</p>
        <p>Proyecto Final</p>
        <div className={styles.wrapperImage}>
          <img className={styles.logoHenry} src={HenryLogo} alt="Logo Henry" />
        </div>
      </div>
      <div className={styles.membersContainer}>
        <div className={styles['box-1']}>
          <h3>Desarrollado por:</h3>
        </div>
        <div className={styles.developerBox}>
          <div className={styles.imgContainer}>
            <img src={Vane} alt="Vanesa Cignani" />
          </div>
          <div className={styles.devData}>
            <p>Vanesa Cignani</p>
            <a href="https://www.linkedin.com/in/vanesa-cignani-669827137/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="35px"
                height="35px"
                fill="#333"
              >
                {' '}
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.developerBox}>
          <div className={styles.imgContainer}>
            <img src={Daniel} alt="Vanesa Cignani" />
          </div>
          <div className={styles.devData}>
            <p>Daniel Vargas</p>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="35px"
                height="35px"
                fill="#333"
              >
                {' '}
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.developerBox}>
          <div className={styles.imgContainer}>
            <img src={Felipe} alt="Daniel Vargas" />
          </div>
          <div className={styles.devData}>
            <p>Felipe Velasquez</p>
            <a href="https://www.linkedin.com/in/juanfelipevel/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="35px"
                height="35px"
                fill="#333"
              >
                {' '}
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.developerBox}>
          <div className={styles.imgContainer}>
            <img src={Carlos} alt="Vanesa Cignani" />
          </div>
          <div className={styles.devData}>
            <p>Carlos Medina</p>
            <a href="https://linkedin.com/in/carlosmedina06">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="35px"
                height="35px"
                fill="#333"
              >
                {' '}
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.developerBox}>
          <div className={styles.imgContainer}>
            <img src={Dario} alt="Vanesa Cignani" />
          </div>
          <div className={styles.devData}>
            <p>Dario Salvadore</p>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="35px"
                height="35px"
                fill="#333"
              >
                {' '}
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.developerBox}>
          <div className={styles.imgContainer}>
            <img src={Dante} alt="Dante Choque" />
          </div>
          <div className={styles.devData}>
            <p>Dante Choque</p>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="35px"
                height="35px"
                fill="#333"
              >
                {' '}
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.developerBox}>
          <div className={styles.imgContainer}>
            {/* <img src={Andres} alt="Andres Rodriguez" /> */}
          </div>
          <div className={styles.devData}>
            <p>Andres Rodriguez</p>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="35px"
                height="35px"
                fill="#333"
              >
                {' '}
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.developerBox}>
          <div className={styles.imgContainer}>
            <img src={Jose} alt="José I. Tapia" />
          </div>
          <div className={styles.devData}>
            <p>José Tapia</p>
            <a href="https://www.linkedin.com/in/jose-ignacio-tapia/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="35px"
                height="35px"
                fill="#333"
              >
                {' '}
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

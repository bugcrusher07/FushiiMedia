'use client'

import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "./page.module.css";






const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      if (headerRef.current) {
        setIsMobile(headerRef.current.offsetWidth < 670);
      }
    };

    // Initial check
    checkWidth();

    // Add resize listener
    window.addEventListener('resize', checkWidth);

    // Cleanup
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.header} ref={headerRef}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src="logo.jpg" alt="Logo" />
        </div>

        {isMobile ? (
          <div className={styles.mobileMenu}>
            <button
              onClick={handleMenuClick}
              className={styles.hamburger}
              aria-label="Toggle menu"
            >
              <span className={`${styles.hamburgerLine} ${isOpen ? styles.line1 : ''}`} />
              <span className={`${styles.hamburgerLine} ${isOpen ? styles.line2 : ''}`} />
              <span className={`${styles.hamburgerLine} ${isOpen ? styles.line3 : ''}`} />
            </button>

            {isOpen && (
              <div className={styles.dropdown}>
                <a href="/" className={styles.dropdownItem}>
                  Home
                </a>
                <button
                  onClick={() => scrollToSection('services1')}
                  className={styles.dropdownItem}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact_bottom')}
                  className={styles.dropdownItem}
                >
                  Contact
                </button>
              </div>
            )}
          </div>
        ) : (
          <nav className={styles.desktopMenu}>
            <a href="/" className={styles.menuItem}>
              Home
            </a>
            <button
              onClick={() => scrollToSection('services1')}
              className={styles.menuItem}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact_bottom')}
              className={styles.menuItem}
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </div>
  );
};


const SVG = () => {
  const insta = () => {
    window.open("https://www.instagram.com/fushiimedia/?hl=en", "_blank")
  }
  return (
    <svg
      onClick={insta}
      className={styles.svg_instagram}
      width="40"
      height="40"
      viewBox="0 0 960 960"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M599.256 326.893C638.207 324.995 644.199 388.816 601.453 383.223C565.997 382.224 561.503 327.892 599.256 326.893Z" fill="white" />
      <path d="M726.895 478.902C729.991 250.487 638.505 220.924 429.866 233.608C286.146 222.522 229.716 331.386 229.317 460.125C221.527 586.168 260.378 745.468 417.282 732.085C613.137 728.59 735.984 708.714 726.895 478.902ZM384.423 85.7931C608.743 64.9192 868.418 97.079 871.514 377.828C879.404 507.066 883.599 645.593 820.278 762.847C752.862 877.503 640.503 872.709 523.649 875.406C420.877 879.501 314.91 888.39 215.834 854.732C114.86 819.776 87.3942 743.571 89.5915 643.895C86.0959 558.103 82.6002 472.51 84.0984 386.617C89.0921 183.071 177.981 81.099 384.423 85.7931Z" fill="#000000" />
      <path d="M429.866 233.608C638.505 220.924 729.89 250.487 726.894 478.902C735.983 708.714 613.136 728.49 417.381 732.085C260.377 745.469 221.626 586.068 229.416 460.125C229.716 331.386 286.145 222.522 429.866 233.608ZM682.949 486.093C682.949 344.67 665.571 269.763 504.972 276.954C457.231 281.648 401.401 274.557 353.461 290.837C257.181 337.878 270.465 467.216 279.354 556.904C288.043 701.823 408.193 697.528 520.652 681.349C658.779 674.058 684.248 614.432 682.949 486.093Z" fill="white" />
      <path d="M495.188 393.309C393.515 388.116 362.155 555.606 473.715 560.101C578.584 557.604 594.664 423.172 495.188 393.309ZM473.915 354.857C649.495 342.972 638.709 602.448 473.116 600.65C316.212 595.856 330.894 368.84 473.915 354.857Z" fill="white" />
      <path d="M473.813 560.102C362.252 555.508 393.513 388.017 495.286 393.31C594.662 423.173 578.582 557.605 473.813 560.102Z" fill="#000000" />
      <path d="M504.973 276.955C665.572 269.664 683.05 344.67 682.95 486.093C684.149 614.433 658.781 674.058 520.653 681.349C408.194 697.529 288.044 701.823 279.355 556.905C270.466 467.117 257.282 337.878 353.462 290.837C401.402 274.558 457.233 281.649 504.973 276.955ZM473.213 600.65C638.706 602.448 649.592 342.972 474.012 354.857C330.89 368.84 316.209 595.856 473.213 600.65ZM601.452 383.222C644.199 388.815 638.206 325.094 599.255 326.892C561.502 327.891 565.997 382.223 601.452 383.222Z" fill="#000000" />
    </svg>
  )
}




const Body = () => {
  const handleDMClick = () => {
    // Replace "USERNAME" with the actual Instagram username
    const instagramDMUrl = 'https://www.instagram.com/direct/inbox/?user_id=fushiimedia';
    window.open(instagramDMUrl, '_blank'); // Opens in a new tab
  };
  return (
    <div className={styles.big_body}>
      <div className={styles.body_container}>
        <div className={styles.first_container}>
          <div className={styles.text_container}>
            THE GO - TO <br />SOCIAL MEDIA <br />MARKETING<br /> SOLUTION
          </div>
          <div className={styles.first_button_container}>
            <button className={styles.first_button} onClick={handleDMClick} >Find Out More &gt;</button>
          </div>
          <div className={styles.svg_container}>
            <SVG />
          </div>
        </div>

      </div>
      <div className={styles.second_container2}>
        <button className={styles.second_button2} onClick={handleDMClick}>BOOK&nbsp; A&nbsp; FREE &nbsp;30&nbsp; MIN&nbsp; CONSULTATION</button>
      </div>
    </div>
  )
}

const SVG1 = () => {
  return (
    <svg fill="#000000" width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>rocket</title>
      <path d="M23.371 29.529c0 0 0.335-2.012-1.731-4.469 2.011-5.641 2.29-10.778 2.29-10.778s4.133 0.95 4.133 5.026c-0.001 6.981-4.692 10.221-4.692 10.221zM11.979 27.078c0 0-2.768-8.883-2.768-12.568 0-1.658 0.187-3.133 0.478-4.472h12.61c0.293 1.34 0.481 2.816 0.481 4.473 0 3.629-2.76 12.567-2.76 12.567h-8.041zM15.99 12.069c-1.418 0-2.568 1.15-2.568 2.569 0 1.418 1.15 2.569 2.568 2.569s2.569-1.15 2.569-2.569c0.001-1.419-1.15-2.569-2.569-2.569zM15.438 0.596v-3.498h1v3.409c1.143 0.832 4.236 3.478 5.635 8.575h-12.16c1.352-4.957 4.296-7.574 5.525-8.486zM8.629 29.529c0 0-4.691-3.24-4.691-10.221 0-4.076 4.133-5.026 4.133-5.026s0.279 5.137 2.289 10.778c-2.067 2.458-1.731 4.469-1.731 4.469zM17.691 30.045l-0.838-0.838-0.893 2.793-1.062-2.793-0.726 1.451-1.062-2.625h5.752l-1.171 2.012z"></path>
    </svg>
  )
}
const SVG2 = () => {
  return (
    <svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <g>
        <g>
          <g>
            <path d="M503.467,29.867h-25.6V12.8c0-4.71-3.823-8.533-8.533-8.533h-42.667v93.867c0,3.627-2.287,6.852-5.709,8.055
				c-0.922,0.316-1.877,0.478-2.825,0.478c-2.543,0-5.009-1.135-6.665-3.2L384,69.129l-27.469,34.338
				c-2.27,2.833-6.093,3.908-9.489,2.722c-3.422-1.203-5.709-4.429-5.709-8.055V4.267h-25.6c-25.233,0-47.266,13.798-59.085,34.219
				C241.05,15.292,205.38,4.267,179.2,4.267H42.667c-4.71,0-8.533,3.823-8.533,8.533v17.067h-25.6C3.823,29.867,0,33.69,0,38.4
				v418.133c0,4.71,3.823,8.533,8.533,8.533h169.822c25.779,5.188,48.367,11.204,64.034,30.771l6.946,8.695
				c0.094,0.111,0.239,0.154,0.333,0.256c0.563,0.64,1.237,1.126,1.971,1.57c0.29,0.179,0.529,0.427,0.845,0.572
				c1.075,0.495,2.253,0.802,3.516,0.802s2.441-0.307,3.516-0.802c0.316-0.145,0.555-0.393,0.853-0.572
				c0.725-0.444,1.399-0.922,1.954-1.562c0.102-0.102,0.247-0.154,0.341-0.265l6.955-8.695
				c15.659-19.567,38.246-25.583,64.026-30.771h169.822c4.71,0,8.533-3.823,8.533-8.533V38.4
				C512,33.69,508.177,29.867,503.467,29.867z M162.133,81.067h51.2c4.71,0,8.533,3.823,8.533,8.533s-3.823,8.533-8.533,8.533h-51.2
				c-4.71,0-8.533-3.823-8.533-8.533S157.423,81.067,162.133,81.067z M213.333,140.8h-17.067c-4.71,0-8.533-3.823-8.533-8.533
				c0-4.71,3.823-8.533,8.533-8.533h17.067c4.71,0,8.533,3.823,8.533,8.533C221.867,136.977,218.044,140.8,213.333,140.8z
				 M221.867,174.933c0,4.71-3.823,8.533-8.533,8.533h-51.2c-4.71,0-8.533-3.823-8.533-8.533s3.823-8.533,8.533-8.533h51.2
				C218.044,166.4,221.867,170.223,221.867,174.933z M93.867,81.067H128c4.71,0,8.533,3.823,8.533,8.533s-3.823,8.533-8.533,8.533
				H93.867c-4.71,0-8.533-3.823-8.533-8.533S89.156,81.067,93.867,81.067z M93.867,123.733h68.267c4.71,0,8.533,3.823,8.533,8.533
				c0,4.71-3.823,8.533-8.533,8.533H93.867c-4.71,0-8.533-3.823-8.533-8.533C85.333,127.556,89.156,123.733,93.867,123.733z
				 M93.867,166.4H128c4.71,0,8.533,3.823,8.533,8.533s-3.823,8.533-8.533,8.533H93.867c-4.71,0-8.533-3.823-8.533-8.533
				S89.156,166.4,93.867,166.4z M93.867,209.067h119.467c4.71,0,8.533,3.823,8.533,8.533s-3.823,8.533-8.533,8.533H93.867
				c-4.71,0-8.533-3.823-8.533-8.533S89.156,209.067,93.867,209.067z M196.267,302.933c-4.71,0-8.533-3.823-8.533-8.533
				s3.823-8.533,8.533-8.533h17.067c4.71,0,8.533,3.823,8.533,8.533s-3.823,8.533-8.533,8.533H196.267z M213.333,337.067
				c0,4.71-3.823,8.533-8.533,8.533c-4.71,0-8.533-3.823-8.533-8.533s3.823-8.533,8.533-8.533
				C209.51,328.533,213.333,332.356,213.333,337.067z M213.333,260.267h-51.2c-4.71,0-8.533-3.823-8.533-8.533
				c0-4.71,3.823-8.533,8.533-8.533h51.2c4.71,0,8.533,3.823,8.533,8.533C221.867,256.444,218.044,260.267,213.333,260.267z
				 M93.867,243.2H128c4.71,0,8.533,3.823,8.533,8.533c0,4.71-3.823,8.533-8.533,8.533H93.867c-4.71,0-8.533-3.823-8.533-8.533
				C85.333,247.023,89.156,243.2,93.867,243.2z M93.867,285.867h68.267c4.71,0,8.533,3.823,8.533,8.533s-3.823,8.533-8.533,8.533
				H93.867c-4.71,0-8.533-3.823-8.533-8.533S89.156,285.867,93.867,285.867z M93.867,328.533h68.267c4.71,0,8.533,3.823,8.533,8.533
				s-3.823,8.533-8.533,8.533H93.867c-4.71,0-8.533-3.823-8.533-8.533S89.156,328.533,93.867,328.533z M247.467,476.339
				c-18.475-17.237-42.035-23.262-66.594-28.169c-0.555-0.119-1.109-0.171-1.673-0.171H17.067V46.933h17.067v366.933
				c0,4.71,3.823,8.533,8.533,8.533h135.689c3.226,0.648,6.391,1.314,9.506,2.005c20.924,4.702,39.202,11.221,52.753,26.846
				c0.58,0.666,1.212,1.22,1.766,1.92l5.086,6.357V476.339z M366.933,123.733h51.2c4.71,0,8.533,3.823,8.533,8.533
				c0,4.71-3.823,8.533-8.533,8.533h-51.2c-4.71,0-8.533-3.823-8.533-8.533C358.4,127.556,362.223,123.733,366.933,123.733z
				 M349.867,166.4h68.267c4.71,0,8.533,3.823,8.533,8.533s-3.823,8.533-8.533,8.533h-68.267c-4.71,0-8.533-3.823-8.533-8.533
				S345.156,166.4,349.867,166.4z M349.867,311.467c-4.71,0-8.533-3.823-8.533-8.533c0-4.71,3.823-8.533,8.533-8.533h68.267
				c4.71,0,8.533,3.823,8.533,8.533c0,4.71-3.823,8.533-8.533,8.533H349.867z M418.133,345.6c0,4.71-3.823,8.533-8.533,8.533
				s-8.533-3.823-8.533-8.533s3.823-8.533,8.533-8.533S418.133,340.89,418.133,345.6z M418.133,268.8H384
				c-4.71,0-8.533-3.823-8.533-8.533c0-4.71,3.823-8.533,8.533-8.533h34.133c4.71,0,8.533,3.823,8.533,8.533
				C426.667,264.977,422.844,268.8,418.133,268.8z M418.133,226.133h-17.067c-4.71,0-8.533-3.823-8.533-8.533
				s3.823-8.533,8.533-8.533h17.067c4.71,0,8.533,3.823,8.533,8.533S422.844,226.133,418.133,226.133z M298.667,81.067h17.067
				c4.71,0,8.533,3.823,8.533,8.533s-3.823,8.533-8.533,8.533h-17.067c-4.71,0-8.533-3.823-8.533-8.533
				S293.956,81.067,298.667,81.067z M298.667,123.733H332.8c4.71,0,8.533,3.823,8.533,8.533c0,4.71-3.823,8.533-8.533,8.533h-34.133
				c-4.71,0-8.533-3.823-8.533-8.533C290.133,127.556,293.956,123.733,298.667,123.733z M298.667,166.4h17.067
				c4.71,0,8.533,3.823,8.533,8.533s-3.823,8.533-8.533,8.533h-17.067c-4.71,0-8.533-3.823-8.533-8.533S293.956,166.4,298.667,166.4
				z M298.667,209.067h68.267c4.71,0,8.533,3.823,8.533,8.533s-3.823,8.533-8.533,8.533h-68.267c-4.71,0-8.533-3.823-8.533-8.533
				S293.956,209.067,298.667,209.067z M298.667,251.733h51.2c4.71,0,8.533,3.823,8.533,8.533c0,4.71-3.823,8.533-8.533,8.533h-51.2
				c-4.71,0-8.533-3.823-8.533-8.533C290.133,255.556,293.956,251.733,298.667,251.733z M298.667,294.4h17.067
				c4.71,0,8.533,3.823,8.533,8.533c0,4.71-3.823,8.533-8.533,8.533h-17.067c-4.71,0-8.533-3.823-8.533-8.533
				C290.133,298.223,293.956,294.4,298.667,294.4z M298.667,337.067h68.267c4.71,0,8.533,3.823,8.533,8.533
				s-3.823,8.533-8.533,8.533h-68.267c-4.71,0-8.533-3.823-8.533-8.533S293.956,337.067,298.667,337.067z M494.933,448H332.8
				c-0.563,0-1.118,0.051-1.672,0.171c-24.559,4.907-48.128,10.931-66.594,28.169v-16.811l5.086-6.357
				c13.696-17.118,32.708-23.868,54.519-28.766c3.115-0.691,6.281-1.357,9.506-2.005h135.689c4.71,0,8.533-3.823,8.533-8.533V46.933
				h17.067V448z"/>
            <path d="M384,46.933c2.594,0,5.043,1.178,6.665,3.2L409.6,73.805V4.267h-51.2v69.538l18.935-23.671
				C378.957,48.111,381.406,46.933,384,46.933z"/>
          </g>
        </g>
      </g>
    </svg>
  )
}
const SVG3 = () => {
  return (

    <svg fill="#000000" width="25px" height="25px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" >

      <g id="_x34_52_x2C__Art_x2C__computer_x2C__design_x2C__digital_x2C__studio">

        <g>

          <path d="M407.588,106.972v127.843h14.404V106.606c0-4.755-1.94-9.087-5.092-12.21    c-3.124-3.15-7.456-5.092-12.238-5.092H71.607c-4.755,0-9.088,1.941-12.239,5.092c-3.122,3.123-5.092,7.455-5.092,12.21v239.846    c0,4.755,1.97,9.087,5.092,12.21c3.123,3.152,7.484,5.093,12.239,5.093h333.055c4.782,0,9.114-1.94,12.238-5.093    c3.151-3.123,5.092-7.455,5.092-12.21v-66.397h-14.404v22.677c0,1.913-1.548,3.46-3.461,3.46H71.325    c-1.884,0-3.432-1.547-3.432-3.46v-195.76c0-1.913,1.548-3.46,3.432-3.46h332.802C406.04,103.512,407.588,105.059,407.588,106.972     M278.113,370.676h-79.958l-15.979,60.714h111.918L278.113,370.676z M127.707,438.311v17.641h220.855v-17.641    C274.934,438.311,201.334,438.311,127.707,438.311z M241.229,342.485c-0.788-0.788-1.885-1.295-3.094-1.295    c-1.21,0-2.307,0.507-3.095,1.295s-1.265,1.885-1.265,3.095c0,1.182,0.477,2.278,1.265,3.066c0.788,0.816,1.885,1.295,3.095,1.295    c1.153,0,2.193-0.423,2.954-1.127l0.14-0.168c0.788-0.788,1.267-1.885,1.267-3.066c0-1.154-0.423-2.194-1.125-2.982    L241.229,342.485z M238.135,334.298c3.122,0,5.937,1.267,7.99,3.292l0.225,0.225c1.886,2.026,3.067,4.756,3.067,7.766    c0,3.094-1.265,5.936-3.292,7.962l-0.281,0.253c-1.999,1.885-4.728,3.067-7.709,3.067c-3.095,0-5.936-1.267-7.963-3.32    c-2.053-2.026-3.32-4.868-3.32-7.962c0-3.123,1.267-5.965,3.292-7.99C232.199,335.564,235.011,334.298,238.135,334.298z     M256.563,82.383h143.568c-0.872-0.788-1.294-2.025-1.04-3.264c0.984-4.502,0.506-8.834-1.041-12.604    c-1.323-3.207-3.404-6.021-5.965-8.244l-0.196-0.141c-2.675-2.25-5.88-3.854-9.341-4.614c-3.995-0.872-8.328-0.591-12.604,1.153    c-0.564,0.227-1.184,0.311-1.831,0.227c-1.884-0.282-3.178-2.055-2.868-3.939c0.168-1.098,0.252-2.251,0.252-3.461    c0-5.232-1.912-10.156-5.12-13.926c-3.206-3.799-7.709-6.471-12.913-7.315c-1.041-0.14-2.195-0.253-3.433-0.253    c-3.713,0-7.203,0.929-10.185,2.56l-0.225,0.113c-3.123,1.744-5.768,4.22-7.681,7.201l-0.114,0.169    c-0.984,1.633-3.121,2.139-4.753,1.154c-2.026-1.238-4.192-2.025-6.359-2.392c-3.573-0.591-7.173-0.056-10.382,1.407    c-3.179,1.434-5.964,3.797-7.849,6.893c-1.127,1.801-1.914,3.883-2.336,6.133c-0.14,1.772-1.632,3.18-3.432,3.18h-0.253    c-4.952,0-9.455,1.941-12.717,5.121c-3.18,3.122-5.178,7.398-5.318,12.236l0.056,1.971l0.227,2.109    c-0.056,1.914-1.632,3.433-3.519,3.377c-3.346-0.084-6.609,0.9-9.452,2.645C258.616,80.609,257.548,81.426,256.563,82.383z     M172.16,159.893h-38.994v38.994h38.994V159.893z M129.706,152.973h45.915c1.913,0,3.46,1.547,3.46,3.46v45.915    c0,1.885-1.548,3.461-3.46,3.461h-45.915c-1.915,0-3.462-1.576-3.462-3.461v-45.915    C126.243,154.52,127.791,152.973,129.706,152.973z M259.517,198.887l-21.776-35.842l-21.775,35.842H259.517z M240.808,154.829    l27.797,45.718c0.984,1.633,0.449,3.742-1.155,4.727c-0.562,0.338-1.181,0.506-1.8,0.506l-55.819,0.029    c-1.913,0-3.46-1.576-3.46-3.461c0-0.76,0.225-1.463,0.647-2.025l27.769-45.689c1.013-1.633,3.122-2.14,4.754-1.154    C240.104,153.816,240.527,154.294,240.808,154.829z M285.006,280.055c-0.731-0.056-1.405-0.309-1.94-0.731l-0.028-0.028    l-30.02-18.793c-0.505-0.281-0.984-0.703-1.321-1.238c-1.013-1.604-0.535-3.714,1.097-4.727l30.3-19.02    c0.592-0.449,1.294-0.703,2.081-0.703h115.493V110.434H74.787v188.838h325.88v-19.217h-87.329h-0.17h-0.196h-27.798h-0.14H285.006    z M261.092,257.435l25.041,15.7h23.574v-12.971c0-1.914,1.549-3.461,3.461-3.461c1.887,0,3.434,1.547,3.434,3.461v12.971h87.525    h0.112h21.214h0.084h18.964v-12.24h-93.209c-1.915,0-3.462-1.547-3.462-3.46s1.547-3.46,3.462-3.46h93.209v-12.238H286.133    L261.092,257.435z M451.421,241.736v31.398h5.064v-31.398H451.421z M463.406,241.736v31.398h11.253    c3.067,0,5.881-1.268,7.936-3.32c2.024-2.025,3.292-4.84,3.292-7.934v-8.92c0-3.066-1.268-5.879-3.292-7.904    c-2.055-2.055-4.868-3.32-7.936-3.32H463.406z M332.553,165.83c-3.348-3.349-7.961-5.402-13.025-5.402    c-5.092,0-9.705,2.054-13.025,5.373c-3.349,3.349-5.403,7.962-5.403,13.055c0,5.092,2.055,9.707,5.375,13.027    c3.349,3.348,7.962,5.4,13.054,5.4c5.064,0,9.678-2.053,13.025-5.373c3.32-3.348,5.375-7.963,5.375-13.055    C337.928,173.763,335.873,169.149,332.553,165.83z M100.192,239.063c-1.915,0-3.46-1.547-3.46-3.46s1.546-3.461,3.46-3.461    h111.806c1.913,0,3.46,1.548,3.46,3.461s-1.548,3.46-3.46,3.46H100.192z M100.192,256.9c-1.915,0-3.46-1.547-3.46-3.461    c0-1.913,1.546-3.46,3.46-3.46h111.806c1.913,0,3.46,1.547,3.46,3.46c0,1.914-1.548,3.461-3.46,3.461H100.192z M48.847,470.412    c-1.913,0-3.46-1.548-3.46-3.461c0-1.884,1.547-3.46,3.46-3.46h255.853c1.915,0,3.463,1.576,3.463,3.46    c0,1.913-1.548,3.461-3.463,3.461H48.847z M198.662,485.999c-1.913,0-3.46-1.575-3.46-3.461c0-1.913,1.547-3.46,3.46-3.46h177.049    c1.914,0,3.462,1.547,3.462,3.46c0,1.886-1.548,3.461-3.462,3.461H198.662z M393.83,485.999c-1.885,0-3.46-1.575-3.46-3.461    c0-1.913,1.575-3.46,3.46-3.46h22.142c1.913,0,3.461,1.547,3.461,3.46c0,1.886-1.548,3.461-3.461,3.461H393.83z M38.774,485.521    c-1.913,0-3.46-1.548-3.46-3.46c0-1.913,1.547-3.461,3.46-3.461h83.868c1.913,0,3.46,1.548,3.46,3.461    c0,1.912-1.548,3.46-3.46,3.46H38.774z M33.035,191.656c0,1.914-1.548,3.461-3.46,3.461s-3.46-1.547-3.46-3.461V88.882    c0-7.315,3.011-13.954,7.793-18.765c4.839-4.84,11.479-7.822,18.793-7.822h59.055c1.915,0,3.46,1.547,3.46,3.461    c0,1.885-1.546,3.461-3.46,3.461H52.7c-5.401,0-10.325,2.193-13.897,5.738c-3.573,3.602-5.768,8.525-5.768,13.927V191.656z     M423.568,69.217c-1.913,0-3.461-1.576-3.461-3.461c0-1.914,1.548-3.461,3.461-3.461c7.315,0,13.955,2.982,18.765,7.793    c4.84,4.84,7.821,11.479,7.821,18.794v43.438c0,1.914-1.546,3.462-3.46,3.462c-1.913,0-3.461-1.548-3.461-3.462V88.882    c0-5.401-2.193-10.325-5.768-13.898C433.893,71.41,428.969,69.217,423.568,69.217z M319.527,153.506    c6.977,0,13.309,2.843,17.893,7.428c4.588,4.614,7.428,10.944,7.428,17.922s-2.84,13.308-7.428,17.894    c-4.584,4.614-10.916,7.455-17.893,7.455c-7.005,0-13.336-2.841-17.922-7.427c-4.587-4.614-7.428-10.944-7.428-17.922    s2.841-13.308,7.428-17.894C306.191,156.349,312.522,153.506,319.527,153.506z" />

        </g>

      </g>

      <g id="Layer_1" />

    </svg>
  )
}
const SVG4 = () => {
  return (
    <svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 503.607 503.607" >
      <g>
        <g>
          <path d="M494.114,54.314l-8.838-6.631c-8.184-6.136-19.884-4.524-26.087,3.592l-14.286,18.625l-1.141-0.906
			c-1.788-1.435-4.088-2.056-6.337-1.771c-2.266,0.294-4.314,1.502-5.666,3.349l-3.19,4.331l-29.981-7.504
			c-3.299-0.823-6.74,0.411-8.763,3.122l-18.482,24.752v-11.34c0-2.224-0.89-4.356-2.459-5.934L293.335,2.459
			C291.765,0.89,289.633,0,287.4,0H10.425C5.792,0,2.032,3.76,2.032,8.393v486.82c0,4.642,3.76,8.393,8.393,8.393H362.95
			c4.633,0,8.393-3.752,8.393-8.393V267.7l115.813-153.533c2.736-3.618,2.09-8.763-1.452-11.6l-2.51-2.014l14.789-20.203
			C504.01,72.116,502.273,60.441,494.114,54.314z M371.343,123.333l28.588-38.291l17.886,4.474l-46.474,63.161V123.333z
			 M295.802,28.655l46.886,46.886h-46.886V28.655z M222.721,153.541c3.273-3.273,8.586-3.273,11.868,0l10.282,10.29l36.092-43.302
			c2.963-3.559,8.251-4.037,11.818-1.074c3.559,2.971,4.037,8.259,1.074,11.826l-41.967,50.361c-1.511,1.805-3.71,2.904-6.068,3.005
			c-0.126,0.008-0.252,0.008-0.378,0.008c-2.224,0-4.356-0.881-5.934-2.459l-16.787-16.787
			C219.439,162.136,219.439,156.823,222.721,153.541z M178.294,377.705H77.573c-4.633,0-8.393-3.752-8.393-8.393
			c0-4.633,3.76-8.393,8.393-8.393h100.721c4.633,0,8.393,3.76,8.393,8.393C186.688,373.953,182.927,377.705,178.294,377.705z
			 M178.294,276.984H77.573c-4.633,0-8.393-3.752-8.393-8.393c0-4.633,3.76-8.393,8.393-8.393h100.721
			c4.633,0,8.393,3.76,8.393,8.393C186.688,273.232,182.927,276.984,178.294,276.984z M178.294,176.262H77.573
			c-4.633,0-8.393-3.752-8.393-8.393c0-4.633,3.76-8.393,8.393-8.393h100.721c4.633,0,8.393,3.76,8.393,8.393
			C186.688,172.51,182.927,176.262,178.294,176.262z M245.819,285.369c-0.126,0.008-0.252,0.008-0.378,0.008
			c-2.224,0-4.356-0.881-5.934-2.459l-16.787-16.787c-3.282-3.273-3.282-8.586,0-11.868c3.273-3.273,8.586-3.273,11.868,0
			l10.282,10.29l36.092-43.302c2.963-3.559,8.251-4.046,11.818-1.074c3.559,2.971,4.037,8.259,1.074,11.826l-41.967,50.361
			C250.377,284.168,248.178,285.268,245.819,285.369z M270.068,350.519l-3.76-2.795l11.088-33.616l21.705,16.166L270.068,350.519z
			 M311.171,316.122l-26.137-17.719l9.72-13.052l25.147,19.347L311.171,316.122z M330.09,291.353l-25.306-19.473l10.114-13.564
			l25.768,19.196L330.09,291.353z M350.855,264.175l-25.936-19.322l10.106-13.564l26.406,19.028L350.855,264.175z M371.629,236.972
			l-26.574-19.154l10.064-13.513l26.909,19.045L371.629,236.972z M393.284,210.743l-28.815-20.388l5.246-7.126v-0.008l70.379-95.66
			l28.756,23.015L393.284,210.743z M484.436,70.429l-14.269,19.498l-12.12-9.569l14.462-18.877c0.646-0.839,1.847-1.007,2.694-0.369
			l8.83,6.622C484.881,68.373,485.066,69.573,484.436,70.429z"/>
        </g>
      </g>
    </svg>
  )
}
const SVG5 = () => {
  return (
    <svg fill="#000000" width="25px" height="25px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 13.219l6.844-3.938c0.906-0.531 1.656-0.156 1.656 0.938v11.625c0 1.063-0.75 1.5-1.656 0.969l-6.844-3.969v2.938c0 1.094-0.875 1.969-1.969 1.969h-11.625c-1.063 0-1.906-0.875-1.906-1.969v-11.594c0-1.094 0.844-1.938 1.906-1.938h11.625c1.094 0 1.969 0.844 1.969 1.938v3.031z"></path>
    </svg>
  )
}
const SVG6 = () => {
  return (
    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
      width="25px" height="25px" viewBox="0 0 512 512" >
      <g>
        <path className={styles.st0} d="M278.172,297.375l-51.203,51.188c0.016,0.594,0.031,1.188,0.031,1.781c0,8.406-1.594,16.781-4.766,24.625
		c-3.203,7.813-7.922,15.156-14.375,21.563l-33.672,33.719c-6.453,6.438-13.766,11.156-21.609,14.344
		c-7.859,3.188-16.219,4.781-24.609,4.781c-8.375,0-16.75-1.594-24.594-4.75c-7.844-3.219-15.156-7.938-21.625-14.375
		c-6.438-6.438-11.156-13.75-14.344-21.594s-4.781-16.219-4.781-24.625c0-8.375,1.594-16.75,4.781-24.594
		s7.906-15.156,14.344-21.625l33.719-33.688c6.438-6.406,13.734-11.156,21.594-14.344c7.828-3.188,16.219-4.781,24.594-4.781
		c0.594,0,1.188,0.031,1.766,0.063l51.203-51.234c-1.594-0.734-3.203-1.422-4.844-2.078c-15.422-6.25-31.781-9.375-48.125-9.375
		s-32.719,3.125-48.125,9.375c-15.422,6.25-29.906,15.688-42.359,28.094l-33.688,33.719c-12.438,12.406-21.859,26.906-28.109,42.344
		S0,367.688,0,384.031s3.125,32.719,9.375,48.156c6.25,15.406,15.672,29.906,28.109,42.313
		c12.422,12.469,26.922,21.906,42.344,28.125c15.438,6.281,31.797,9.375,48.141,9.375c16.359,0,32.719-3.094,48.141-9.375
		c15.422-6.219,29.922-15.656,42.344-28.125l33.703-33.656c12.422-12.469,21.844-26.938,28.109-42.344
		c6.266-15.469,9.359-31.813,9.375-48.156c-0.016-16.313-3.109-32.688-9.375-48.156
		C279.594,300.594,278.891,298.969,278.172,297.375z"/>
        <path className={styles.st0} d="M502.625,79.844c-6.25-15.438-15.672-29.938-28.109-42.359c-12.422-12.422-26.922-21.859-42.359-28.109
		C416.734,3.125,400.375,0,384.031,0s-32.719,3.125-48.141,9.375s-29.922,15.688-42.344,28.109l-33.703,33.703
		C247.422,83.594,238,98.094,231.734,113.531c-6.266,15.406-9.359,31.781-9.359,48.141c0,16.344,3.094,32.703,9.359,48.141
		c0.672,1.625,1.359,3.219,2.094,4.828l51.203-51.203c-0.016-0.578-0.031-1.156-0.031-1.766c0-8.391,1.594-16.781,4.781-24.609
		c3.188-7.844,7.906-15.156,14.359-21.625l33.672-33.688c6.453-6.406,13.766-11.141,21.625-14.344
		c7.813-3.156,16.203-4.781,24.594-4.781c8.406,0,16.75,1.625,24.625,4.781c7.813,3.203,15.141,7.938,21.594,14.344
		c6.438,6.469,11.156,13.781,14.344,21.625c3.156,7.844,4.781,16.219,4.781,24.594c0,8.391-1.625,16.75-4.781,24.625
		c-3.188,7.844-7.906,15.156-14.344,21.594l-33.688,33.688c-6.438,6.438-13.766,11.156-21.625,14.344
		c-7.828,3.188-16.203,4.781-24.594,4.781c-0.594,0-1.188-0.016-1.766-0.031l-51.203,51.219c1.594,0.719,3.203,1.422,4.813,2.063
		c15.453,6.281,31.813,9.406,48.156,9.406s32.719-3.125,48.125-9.406c15.422-6.25,29.906-15.672,42.359-28.094l33.688-33.703
		c12.438-12.422,21.859-26.922,28.109-42.359c6.25-15.406,9.375-31.781,9.375-48.125S508.875,95.25,502.625,79.844z"/>
        <path className={styles.st0} d="M160.219,351.781c12.234,12.25,32.063,12.25,44.281,0L351.781,204.5c12.219-12.219,12.25-32.031,0-44.281
		c-12.234-12.219-32.063-12.219-44.281,0L160.219,307.531C148,319.75,148,339.563,160.219,351.781z"/>
      </g>
    </svg>
  )
}

const Services = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [clipPath, setClipPath] = useState<string>('');
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculateClipPath = (width: number, height: number): string => {

    return `path('M 0 0   L 0 ${height - 150}    C ${(100 / 1920) * width} ${height - 200}, ${(200 / 1920) * width} ${height - 250}, ${(250 / 1920) * width} ${height - 150}  C ${(350 / 1920) * width} ${height - 50}, ${(450 / 1920) * width} ${height - 200}, ${(500 / 1920) * width} ${height - 150}   C ${(600 / 1920) * width} ${height - 50}, ${(750 / 1920) * width} ${height - 350}, ${(850 / 1920) * width} ${height - 150}  C ${(900 / 1920) * width} ${height - 50}, ${(1075 / 1920) * width} ${height - 350}, ${(1200 / 1920) * width} ${height - 200}  C ${(1450 / 1920) * width} ${height + 50}, ${(1600 / 1920) * width} ${height - 250}, ${(1700 / 1920) * width} ${height - 100}   C ${(1850 / 1920) * width} ${height}, ${(1900 / 1920) * width} ${height - 300}, ${width} ${height - 150}  L ${width} 0 Z')`;

  };

  useEffect(() => {
    const updateClipPath = (): void => {
      if (divRef.current) {
        const width = divRef.current.offsetWidth;
        const height = divRef.current.offsetHeight;
        let newClipPath = (calculateClipPath(width, height));
        setClipPath(newClipPath)


      }
    };

    const handleResize = (): void => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        updateClipPath();
      }, 150);
    };

    updateClipPath();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);


  return (
    <div ref={divRef} id="services1" className={styles.idkm} style={{
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(to bottom,#06012d , #000000)',

      position: 'relative',
      clipPath: clipPath || 'none'
    }}>
      <div>
        <div className={styles.heading}>Featured</div>
        <div className={styles.heading1}>SERVICES</div>
      </div>
      <div className={styles.options}>
        <div className={styles.options_container1}>
          <div className={styles.option_1}>
            <div className={styles.idek}>
              <div>Digital Strategy <br />& Planning</div><div className={styles.option_svg}><SVG1 /></div></div>

            <div className={styles.idev2}>We Create customised <br /> targeting stories to reach<br /> your target audience</div></div>
          <div className={styles.option_1}><div className={styles.idek}>
            <div >Paid <br /> Advertising</div><div className={styles.option_svg}><SVG2 /></div></div>

            <div className={styles.idev2}>Targeted ad campaigns <br />through Facebook <br /> and Instagram. We bring direct <br />traffic to your site.</div></div>
          <div className={styles.option_1}>
            <div className={styles.idek}>
              <div>Lead <br /> Generation</div><div className={styles.option_svg}><SVG3 />
              </div></div>
            <div className={styles.idev2}>Generate leads via email <br /> and phone numbers.</div></div>
        </div>
        <div className={styles.options_container}>
          <div className={styles.option_1}><div className={styles.idek}>
            <div>Account <br /> Startup</div><div className={styles.option_svg}><SVG4 /></div>
          </div>
            <div className={styles.idev2}>Create professional business <br /> social media accounts.</div></div>
          <div className={styles.option_1}>
            <div className={styles.idek}>
              <div>Copywriting</div>
              <div className={styles.option_svg}> <SVG5 /></div>
            </div>
            <div className={styles.idev2}>Create on-brand,funny, <br />captivating and engaging <br />script for graphics, captions <br /> and ads.</div></div>
          <div className={styles.option_1}><div className={styles.idek}>
            <div>Short Form <br />Content Creation</div><div className={styles.option_svg}><SVG6 /></div>
          </div>
            <div className={styles.idev2}>In person and hands-on <br />content-creation. Photo and <br />Video content.</div></div>
        </div>
      </div>
    </div>
  )
}
// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const FormComponent: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [qrCode, setQrCode] = useState<string | null>(null);
//   const [isWhatsAppConnected, setIsWhatsAppConnected] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Check WhatsApp connection status
//   const checkWhatsAppStatus = async () => {
//     try {
//       const response = await fetch('/api/whatsapp-status');
//       const data = await response.json();

//       if (data.status === 'connected') {
//         setIsWhatsAppConnected(true);
//         setQrCode(null);
//       } else if (data.status === 'awaiting_qr_scan') {
//         setQrCode(data.qrCode);
//         setIsWhatsAppConnected(false);
//       } else {
//         setIsWhatsAppConnected(false);
//       }
//     } catch (error) {
//       console.error('Error checking WhatsApp status:', error);
//     }
//   };

//   // Check status periodically
//   useEffect(() => {
//     const interval = setInterval(checkWhatsAppStatus, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch('/api/submit-form', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('Message sent successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       } else if (data.needsQR) {
//         alert('Please scan the QR code to connect WhatsApp first');
//         checkWhatsAppStatus();
//       } else {
//         alert('Failed to send message. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {!isWhatsAppConnected && qrCode && (
//         <div className={styles.qrCodeContainer}>
//           <h3>Scan QR Code to Connect WhatsApp</h3>
//           <img src={qrCode} alt="WhatsApp QR Code" />
//           <p>Please scan this QR code with WhatsApp to enable message sending</p>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//           className={styles.input}
//         />

//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           className={styles.input}
//         />

//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Message"
//           required
//           className={styles.textarea}
//         />

//         <button
//           type="submit"
//           className={styles.button}
//           disabled={isSubmitting || (!isWhatsAppConnected && !qrCode)}
//         >
//           {isSubmitting ? 'Sending...' : 'Send Message'}
//         </button>

//         {!isWhatsAppConnected && !qrCode && (
//           <p className={styles.status}>Initializing WhatsApp connection...</p>
//         )}
//       </form>
//     </div>
//   );
// };

// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   message: string;
// }

// const FormComponent: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({ name: '', phone: '', email: '', message: '' });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/submit-form', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Message sent successfully');
//         setFormData({ name: '', phone: '', email: '', message: '' });
//       } else {
//         alert('Failed to send message');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.bigForm} style={{ display: 'flex', flexDirection: 'column' }}>
//       <div style={{ display: 'flex' }}>
//         <input
//           maxLength={30}
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className={styles.input}
//           placeholder="Name"
//         />
//         <input
//           maxLength={14}
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className={styles.input}
//           placeholder="Phone"
//         />
//       </div>
//       <input
//         maxLength={50}
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="E-mail"
//         style={{ height: '30px' }}
//       />
//       <textarea
//         maxLength={200}
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         className={styles.bigMessage}
//         placeholder="Any queries or a message"
//       />
//       <input type="submit" className={styles.submit_button} style={{ width: '100px', height: '30px' }} value="submit" />
//     </form>
//   );
// };

interface FormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          phone: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <form className={styles.bigForm} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <input maxLength={30} name="name" value={formData.name} onChange={handleChange} className={styles.input} placeholder="Name"
          required ></input>
        <input maxLength={14} name="phone" value={formData.phone} onChange={handleChange}
          placeholder="Phone" className={styles.input} ></input>
      </div>
      <input maxLength={50} placeholder="E-mail" required name="email"
        value={formData.email}
        onChange={handleChange} style={{ height: "30px" }}></input>

      <textarea maxLength={200} className={styles.bigMessage} name="message"
        value={formData.message}
        onChange={handleChange} placeholder="Any queries or a message" required   ></textarea>
      <input type="submit" className={styles.submit_button} style={{ width: "100px", height: "30px" }} value={isSubmitting ? "Submitting..." : "Submit"}
        disabled={isSubmitting}></input>
    </form>

  );
};


const Bottom = () => {

  return (<div id="contact_bottom">
    <div className={styles.bottom_wrapper}>
      <div className={styles.content1}>
        <div className={styles.contact}>Contact us</div>
        <div style={{ marginBottom: "24px" }}>CONTACT</div>
        <div>+91 88528 62347</div>
        <div style={{ marginBottom: "35px", marginTop: "10px", fontSize: "17px", backgroundColor: "white", color: "black", width: "175px", padding: "5px 2px" }}>fushiimedia@gmail.com</div>
        <div style={{ marginBottom: "35px", display: "inline-block", width: "200px", height: "2px", backgroundColor: "black" }}></div>
        <div>Address</div>
        <div>--Address--</div>
      </div>
      <div className={styles.content2}>

        <FormComponent />
      </div>
    </div>
    <div className={styles.bottom_bar}><div>@2024 FushiiMedia</div></div>
  </div>
  )
}
export default function Home() {
  return (<div>
    <Header />
    <Body />
    <Services />
    <Bottom />
  </div>
  );
}

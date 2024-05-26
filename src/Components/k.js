
import React from 'react';

const sharedClasses = {
  textWhite: 'text-white',
  textZinc300: 'text-zinc-300',
  bgBlue600: 'bg-blue-600',
  bgWhite: 'bg-white',
  textZinc800: 'text-zinc-800',
  bgBlue700: 'bg-blue-700',
  textZinc400: 'text-zinc-400',
  container: 'container',
  mxAuto: 'mx-auto',
  px4: 'px-4',
  py8: 'py-8',
  flex: 'flex',
  justifyBetween: 'justify-between',
  itemsCenter: 'items-center',
  py4: 'py-4',
  text3xl: 'text-3xl',
  text4xl: 'text-4xl',
  fontBold: 'font-bold',
  mt8: 'mt-8',
  mb2: 'mb-2',
  grid: 'grid',
  gridCols1: 'grid-cols-1',
  gridCols2: 'grid-cols-2',
  gap8: 'gap-8',
  p6: 'p-6',
  roundedLg: 'rounded-lg',
  shadowLg: 'shadow-lg',
  text2xl: 'text-2xl',
  mb3: 'mb-3',
  mt4: 'mt-4',
  px4: 'px-4',
  py2: 'py-2',
  textSm: 'text-sm',
  py6: 'py-6',
  spaceX4: 'space-x-4',
};

const Headerprivacy= () => (
  <header className={`${sharedClasses.flex} ${sharedClasses.justifyBetween} ${sharedClasses.itemsCenter} ${sharedClasses.py4}`}>
    <h1 className={sharedClasses.text3xl}>NEPTUNE</h1>
    <nav>
      <a href="#" className={`${sharedClasses.textWhite} mr-4 hover:${sharedClasses.textZinc300}`}>Dashboard</a>
      <a href="#" className={`${sharedClasses.textWhite} hover:${sharedClasses.textZinc300}`}>Contact Us</a>
    </nav>
  </header>
);

const MainContent = () => (
  <main>
    <h2 className={`${sharedClasses.text4xl} ${sharedClasses.fontBold} ${sharedClasses.mt8} ${sharedClasses.mb2}`}>Privacy Policy</h2>
    <p className={`${sharedClasses.textZinc300} text-lg mb-8`}>Effortless User Data Privacy</p>
    <div className={`${sharedClasses.grid} ${sharedClasses.gridCols1} md:${sharedClasses.gridCols2} ${sharedClasses.gap8}`}>
      <div className={`${sharedClasses.bgWhite} ${sharedClasses.textZinc800} ${sharedClasses.p6} ${sharedClasses.roundedLg} ${sharedClasses.shadowLg}`}>
        <h3 className={`${sharedClasses.text2xl} ${sharedClasses.fontBold} ${sharedClasses.mb3}`}>Privacy Policy</h3>
        <img src="https://placehold.co/200x150" alt="Privacy Illustration" className="mb-4" />
        <p>Lorem ipsum dolor sit amet, consectetur elit sed adipiscing , sed do eiusmod tempor incididunt utafli labore et dolore magna aliqua.</p>
        <button className={`${sharedClasses.mt4} ${sharedClasses.bgBlue600} ${sharedClasses.textWhite} ${sharedClasses.px4} ${sharedClasses.py2} ${sharedClasses.rounded} hover:${sharedClasses.bgBlue700}`}>Learn More</button>
      </div>
      <div className={`${sharedClasses.bgWhite} ${sharedClasses.textZinc800} ${sharedClasses.p6} ${sharedClasses.roundedLg} ${sharedClasses.shadowLg}`}>
        <h3 className={`${sharedClasses.text2xl} ${sharedClasses.fontBold} ${sharedClasses.mb3}`}>Terms of Usage</h3>
        <img src="https://placehold.co/200x150" alt="Terms Illustration" className="mb-4" />
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur casa de papel dolore magna aliqua.</p>
        <button className={`${sharedClasses.mt4} ${sharedClasses.bgBlue600} ${sharedClasses.textWhite} ${sharedClasses.px4} ${sharedClasses.py2} ${sharedClasses.rounded} hover:${sharedClasses.bgBlue700}`}>Learn More</button>
      </div>
    </div>
  </main>
);

const Footer = () => (
  <footer className={`${sharedClasses.textCenter} ${sharedClasses.textZinc300} ${sharedClasses.textSm} ${sharedClasses.py6}`}>
    <p>Last Updated on 02.02.2020</p>
    <div className={`${sharedClasses.flex} ${sharedClasses.justifyCenter} ${sharedClasses.spaceX4} mt-4`}>
      <a href="#" className={`hover:${sharedClasses.textZinc400}`}>Share</a>
      <a href="#" className={`hover:${sharedClasses.textZinc400}`}>Print</a>
    </div>
  </footer>
);

const PrivacyComponent = () => (
  <div className={`${sharedClasses.bgBlue600} ${sharedClasses.textWhite} ${sharedClasses.fontSans}`}>
    <div className={`${sharedClasses.container} ${sharedClasses.mxAuto} ${sharedClasses.px4} ${sharedClasses.py8}`}>
      <Headerprivacy />
      <MainContent />
      <Footer />
    </div>
  </div>
);

export default PrivacyComponent;

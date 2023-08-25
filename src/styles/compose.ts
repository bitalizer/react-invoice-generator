import ReactPDF from '@react-pdf/renderer';
import styles from './styles';

const compose = (classes: string): ReactPDF.Styles => {
  const css: ReactPDF.Styles = {};

  const classesArray: string[] = classes.replace(/\s+/g, ' ').split(' ');

  classesArray.forEach((className) => {
    if (className in styles) {
      Object.assign(css, styles[className]);
    }
  });

  return css;
};

export default compose;

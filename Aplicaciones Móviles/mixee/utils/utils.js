import * as Font from 'expo-font';

const FONT_NAME = 'custom-font';
const FONT_PATH = require('../assets/fonts/TextLogo.ttf');

export const loadFonts = async () => {
  await Font.loadAsync({
    [FONT_NAME]: FONT_PATH,
  });
};
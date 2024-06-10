export interface Theme {
    color: {
        white: string;
        black: string;
        headerBG: string;
        headerMain: string;
    };
    font: {
        rammillas: string;
        rammillasBold: string;
        commons: string;
        brownSugar: string;
    };
}

export const theme: Theme = {
  color: {
    black: 'rgb(0,0,0)',
    white: 'rgb(255,255,255)',
    headerBG: 'white',
    headerMain: 'black',
  },
  font: {
    rammillas: 'TTRamillas',
    rammillasBold: 'TTRamillasBold',
    commons: 'TTCommons',
    brownSugar: 'BrownSugar',
  },
};

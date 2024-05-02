export interface Theme {
    color: {
        white: string;
        black: string;
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
  },
  font: {
    rammillas: 'TTRamillas',
    rammillasBold: 'TTRamillasBold',
    commons: 'TTCommons',
    brownSugar: 'BrownSugar',
  },
};

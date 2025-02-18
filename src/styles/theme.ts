export interface Theme {
    color: {
        white: string;
        black: string;
        red: string;
        headerBG: string;
        headerMain: string;
    };
    font: {
        allegrettoScriptTwo: string;
        castoroTitling: string;
        kudryashevDisplay: string;
        kudryashevHeadline: string;
        baskervilleRegular: string;
    };
}

export const theme: Theme = {
    color: {
        black: 'rgb(0,0,0)',
        white: 'rgb(255,255,255)',
        red: 'rgb(129, 3, 3)',
        headerBG: 'white',
        headerMain: 'black'
    },
    font: {
        allegrettoScriptTwo: 'AllegrettoScriptTwo',
        castoroTitling: 'CastoroTitling',
        kudryashevDisplay: 'KudryashevDisplay',
        kudryashevHeadline: 'KudryashevHeadline',
        baskervilleRegular: 'Baskerville_Regular'
    }
};

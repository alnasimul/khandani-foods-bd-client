import honey from './honey';
import mixedNuts from './mixedNuts';
import tea from './tea';
import dates from './dates';

const fakeData = [ ...honey, ...mixedNuts, ...tea, ...dates];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;
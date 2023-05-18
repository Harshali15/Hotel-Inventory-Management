import { Calculator } from './testservice';

describe('testservice', () => {
    it('should add to 2 numbers', () => {
        const service = new Calculator();
        expect(service.add(1, 2)).toBe(3);
    });
    it('should subtract to 2 numbers', () => {
        const service = new Calculator();
        expect(service.add(1, 2)).toBe(-1);
    });
    });
    
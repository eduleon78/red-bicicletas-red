var Bicicleta = require('../../models/bicicleta');

beforeEach(() => { Bicicleta.allBicis = []; });
describe('Bicicleta.allBicis', () => {
    it('Comienza vacia', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', () => {
    it('agregamos una bici', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [-34.6812424, -58.3861497]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

describe('Bicicleta.findById', () => {
    it('Debe devolver la bici con ID 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);        
        var aBici = new Bicicleta(1, 'rojo', 'urbana', [-37.96, -57.56]);
        
        var aBici2 = new Bicicleta(2, 'verde', 'carrera', [-37.26, -57.16]);
        Bicicleta.add(aBici);
        Bicicleta.add(aBici2);

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);
        expect(targetBici.modelo).toBe(aBici.modelo);

    });
});




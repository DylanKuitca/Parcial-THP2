import fs from 'fs'

const aRecibos = [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
    ]

    setTimeout(() => {
        console.log("PARCIAL THP2");
    }, 7000);

    aRecibos.forEach(element => {
    console.log(`cliente: ${element.importe} / importe ${element.importe}`);
    });

    console.log("/***************** MAP *****************/");
    const recibosPlus30 = aRecibos.map(element => element = {id: element.id, numero: element.numero, importe: element.importe * 1.3, cliente: element.cliente})
    console.log(recibosPlus30);
    
    console.log("/***************** FILTER *****************/");
    const clientesConR = aRecibos.filter(element => element.cliente.charAt(0) == "R");
    console.log(clientesConR);
    
    console.log("/***************** SORT *****************/");
    const recibosPorImporte = aRecibos.sort((a, b) => b.importe - a.importe);
    console.log(recibosPorImporte);

    
    console.log("/***************** CREAR ARCHIVO *****************/");
    fs.writeFileSync('./src/resources/aRecibos.txt',"nuevo texto")
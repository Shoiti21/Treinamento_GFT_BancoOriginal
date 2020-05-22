angular.module('AppMaquina').value("configValue", {
    maquininhas: [{
            id: 1,
            img:"js/test/original-zip.png",
            name:"Original Zip",
            components: [
                "Conexão Chip + Wifi",
                "Comprovante por sms"
            ]
        },
        {
            id: 2,
            img:"js/test/original-flash.png",
            name:"Original Flash",
            components: [
                "Vendas 3x mais rápidas",
                "Comprovante impresso"
            ]
        }
    ],
    conditions: [{
        id: 1,
        name: "Cielo",
        debit: {
            perDay: "1,99",
            perYear: "2,39"
        },
        credit: {
            cashPerTwoDays:  "4,99",
            parceled: {
                default: "5,59",
                perParcel: "2,99"
            }
        }
        
    }]
});

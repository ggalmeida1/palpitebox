import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'
import moment from 'moment'

const doc = new GoogleSpreadsheet('1SAAMcB336n6yW6GGe8eUHvgQ7OZcvx9gXI_n0oZVv_k')

export default async(req, res) => {

    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)


        const sheetConfig = doc.sheetsByIndex[2]
        await sheetConfig.loadCells('A3:B3')
    
        const mostrarPromocaoCell = sheetConfig.getCell(2, 0)
        const textoCell = sheetConfig.getCell(2,1)

        let Cupom = ''
        let Promo = ''
        if (mostrarPromocaoCell.value === 'VERDADEIRO') {
            //To-do: Generate Coupon
            Cupom = 'temporario'
            Promo = textoCell.value
        }

        //Nome Email WhatsApp Cupom Promo
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: 5,
            'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm'),
            Cupom,
            Promo
        })
        res.end(req.body)

    }catch(err) {
        console.log(err)
        res.end('error')
    }
}
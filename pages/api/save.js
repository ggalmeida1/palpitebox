import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1SAAMcB336n6yW6GGe8eUHvgQ7OZcvx9gXI_n0oZVv_k')

export default async(req, res) => {

    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        //Nome Email WhatsApp Cupom Promo
        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Cupom: 'aaa113',
            Promo: 'promo2'
        })
        res.end(req.body)

    }catch(err) {
        console.log(err)
        res.end('error')
    }
}
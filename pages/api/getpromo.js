import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1SAAMcB336n6yW6GGe8eUHvgQ7OZcvx9gXI_n0oZVv_k')


export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
    
        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:B3')
    
        const mostrarPromocaoCell = sheet.getCell(2, 0)
        const textoCell = sheet.getCell(2,1)

        res.end(JSON.stringify({
            showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
            message: textoCell.value
        }))

    }catch(err){
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }
}
import connectMongo from "../../../database/conn";

export default async function handler(req, res) {
  connectMongo()

  const {method} = req

  switch(method){
    case 'GET':
        res.status(200).json({ method, name: 'GET Request'});
    case 'POST':
        res.status(200).json({ method, name: 'POST Request'});
    case 'PUT':
        res.status(200).json({ method, name: 'PUT Request'});                    
    case 'DELETE':
        res.status(200).json({ method, name: 'DELETE Request'}); 
    default:
        res.setHeader('Allow', ['GET','POST','PUT','DELETE']);
        res.status(405).end(`Method${method} Not Allowed` )                           
  }
}

const bodyParser = require('body-parser');
const express = require('express');
const  connect  = require('./config/database.js');
const cors = require('cors');
const apiRoutes = require('./router/index.js');
const app = express();
const ProductRepository  = require('./repository/product-reository.js');
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use('/api' ,apiRoutes);
app.listen(PORT, async() => {
    console.log(`server is starterd at ${PORT}`);
    await connect();
    console.log("Mongodb connected");
    // const service = new UserService();
    const repo = new ProductRepository();
    // const res = await repo.("651d93b928f60c9a4ded2bb9");
    // console.log(res.id);
    // const response = await service.getCartItems("651d93b928f60c9a4ded2bb9");
    // console.log(response);

    // const res = await repo.create({"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700\u0026amp;fmt=jpeg\u0026amp;qlt=80\u0026amp;op_sharpen=0\u0026amp;op_usm=1.0,1.0,5,0\u0026amp;iccEmbed=0","name":"'70s RETRO GLAM KEFIAH","price":20.0}

    // );
    // console.log(res);


});
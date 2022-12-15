const mongoose = require('mongoose');

const getConnection = async () => {
    try {

        const url = "mongodb://admin:E1vSmO6wR6sHepYF@ac-ypovfko-shard-00-00.pyxpcph.mongodb.net:27017,ac-ypovfko-shard-00-01.pyxpcph.mongodb.net:27017,ac-ypovfko-shard-00-02.pyxpcph.mongodb.net:27017/inventario_jwt?ssl=true&replicaSet=atlas-kfgttm-shard-0&authSource=admin&retryWrites=true&w=majority";
        await mongoose.connect(url);
        console.log('la conexion ha sido exitosa');

    }catch (error){
        console.log(error);
    
    }

}
module.exports = {
    getConnection
}


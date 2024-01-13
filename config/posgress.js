import sequelize from '../app/database/database.js'

// Aquí puedes definir tus modelos
import '../app/models/cliente.js'
import '../app/models/notificacion.js'
import '../app/models/restaurante.js'
import '../app/models/pedido.js'
import '../app/models/transacciones.js'
import '../app/models/pedidoEntrega.js'
import '../app/models/itemMenu.js'
import '../app/models/itemPedido.js'
import '../app/models/entregador.js'

const dbConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
        
        // Aquí puedes definir tus modelos y realizar otras configuraciones de Sequelize según tus necesidades
        await sequelize.sync({alter: true})
    
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    }
};

export default dbConnect;
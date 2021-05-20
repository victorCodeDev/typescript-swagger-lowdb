import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync'

type Cliente = {
    id: string;
    nombre: string;
    apellido: string;
    numeroDocumento: string;
}

type Schema = {
    clientes: Cliente[]
}

let db: lowdb.LowdbSync<Schema>;

export const createConnection = () => {
    const adapter = new FileSync<Schema>('db.json');
    db = lowdb(adapter);
    db.defaults({ clientes: [] }).write();
}

export const getConnection = () => db;

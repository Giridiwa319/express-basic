# Catatan

1. Sequelize
    a.Install Dari Awal
           `npx sequelize-cli init`
    b. Crete Database
        `npx sequelize db:create`
    c. Buat Migration Database
        `npx sequelize-cli model:generate --name item --attributes name:string,price:integer,type:string,stock:integer,image:string` | `npx sequelize-cli model:generate --name user --attributes username:string, email:string, password:string, role:string,image:string`
        
    d. Migration
        `npx sequelize-cli db:migrate`
    e.Cek dalam dbeaver.
    

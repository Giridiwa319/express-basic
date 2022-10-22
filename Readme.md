# Catatan

1. Sequelize
    a.Install Dari Awal
        ``` bash
            npx sequelize-cli init
        ```
    b. Crete Database
        ``` bash
            npx sequelize db:create
        ```
    c. Buat Migration Database
        ``` bash
            npx sequelize-cli model:generate --name item --attributes name:string,price:integer,type:string,stock:integer,image:string
        
            npx sequelize-cli model:generate --name user --attributes username:string, email:string, password:string, role:string,image:string
        ```
    d. Migration
        ``` bash
        npx sequelize-cli db:migrate
        ```
    e.Cek dalam dbeaver.
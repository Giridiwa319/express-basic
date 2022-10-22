# Catatan
1. Sequelize
    a. Install Sequelize dari awal 
        
        `npm install sequelize-cli init `

    b. Create Database 
        
        `npx sequelize db:create`

        <!> Perlu di perhatikan : Jika ingin menjalankan perintah db create di atas pastikan kalian sudah menulis nama databasenya di config.json 
        Contoh Config.json :
        {
            "development" : {
                "username" : "masukkan username kamu",
                "password" : "Masukkan Password Db kamu"
                "database" : "masukkan nama db kamu"
                "host"     : "127.0.0.1"
                "dialect"  : "Masukkan Jenis Db kamu (Postgres,Mysql,dll)"
            }
            {
            "test" :{
                "username" : "root"
                "password" : "null"
                "database" : "database_test"
                "host"     : "127.0.0.1"
                "dialect"  : Mysql
                }
            "production" : {
                "username" : "root"
                "password" : "null"
                "database" : "database_production"
                "host"     : 127.0.0.1
                "dialect"  : Mysql
                }
            }
        }
        Setelah semua di isi di atas baru kamu jalankan Perintah `npx sequelize db:create` dan lihat di dbeaver.
        
        

    C. Buat Migration Database
    
        `npx sequelize-cli model:generate --name item 
        --attribute name:string,price:integer,type:string,stock:integer,image:string`
        
        `npx sequelize-cli model:generate --name user --attributes username:string, email:string, password:string, role:string,image:string`
    
    D.Buat Migration
     
     `npx sequelize-cli db:migrate`
    
    E. Terakhir Buka di Dbeaver kalian.
     

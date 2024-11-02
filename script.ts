import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const user = await prisma.user.create(
        { data : {name: "James", email: "james@gmail.com",
            article: {create: {title:'Roosi nimi', body: 'Name of the rose'}} 
        }})
        
        console.log(user)
}

main()
    
.catch(e => {console.error(e.message)})
    
.finally(async () => {await prisma.$disconnect()})
import { PrismaClient } from '@prisma/client'
import csv from 'csv-parser'
import { create } from 'domain';
import fs from 'fs'
import { countToCode } from './country.js';

const prisma = new PrismaClient()
let count = 0;
let UserId;


fs.createReadStream('./Dataset_Hackathon.csv')
  .pipe(csv())
  .on('data', async (row) => {
    if (count % 2 == 0) {
      UserId="cldf31k1400038va8k6j1s7zs"
    } else {
      UserId="cldf35s7s00068va88b1tq1aq"
    }
    try {
      await prisma.item.create({
        data: {
          name: row.Commodity,
          quantity: parseInt(row.Quantity),
          country:row.Country,
          category: {
            connectOrCreate: {
              where: {
                name: row.Category
              },
              create: {
                name: row.Category,
                volume: parseInt(row.Volume)
              }
            },
          },
          warehouse: {
            connectOrCreate: {
              where: {
                id:await countToCode(row.Country)
              },
              create:{
                userId: UserId,
                distance:parseFloat(row.Distance),
                id:await countToCode(row.Country),
              }
            }
          },
          exportType: row.Flow,
          user: {
            connect: {
              id: UserId
            }
          },
         
          

        }
      })
    } catch (error) {
      
    }
    // prisma.item.create({
    //   data: {
    //     name: row.Commodity,
    //     quantity: row.Quantity,
    //     category: {
    //       connect: { name: row.Category },
    //       create: { name: row.Category, volume: row.Volume }
    //     },
    // warehouses: {
    //   create: {
    //     distance: row.Distance,
    //     ItemsInWarehouse: {
    //       create: {
    //         item: { connect: { name: row.Commodity } },
    //         warehouse: { connect: { distance: row.Distance } }
    //       }
    //     }
    //   }
    // }
    //   }
    // })
    count+=1  
  },
)
  .on('end', () => {
    console.log('CSV file successfully processed');
    prisma.$disconnect()
  })

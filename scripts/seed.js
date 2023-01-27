import { PrismaClient } from '@prisma/client'
import csv from 'csv-parser'
import fs from 'fs'

const prisma = new PrismaClient()

fs.createReadStream('./Dataset_Hackathon.csv')
  .pipe(csv())
  .on('data', async (row) => {

    try {
      await prisma.item.create({
        data: {
          name: row.Commodity,
          quantity: parseInt(row.Quantity),
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
          exportType: row.Flow,
          user: {
            connect: {
              id: "clderoc9900008v00esjea3ry"
            }
          }


        }
      })
    } catch (error) {
      console.log(row);
      console.log(error);
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
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    prisma.$disconnect()
  })

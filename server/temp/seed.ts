/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();

import { ObjectId } from "mongodb";
import { connectDatabase } from "../src/database";
import { Listing, ListingType, User } from "../src/lib/types";

const seed = async () => {
  try {
    console.log(`[seed] : running...`);

    const db = await connectDatabase();
    const users: User[] = [
      {
        _id: "5d378db94e84753160e08b55",
        token: "token_************",
        name: "wylian",
        avatar: "001",
        contact: "wylian.sylvie@gmail.com",
        walletId: "acct_************",
        orderings: [],
        listings: [new ObjectId("61f2e302c64e5d7ff9f8fb7f"), new ObjectId("61f2e302c64e5d7ff9f8fb80"), new ObjectId("61f2e302c64e5d7ff9f8fb81")],
      },
    ];
    const listings: Listing[] = [
      {
        _id: new ObjectId(),
        dishName: "gongbaojiding",
        image: "image001",
        price: 10,
        rating: 1,
        type: ListingType.Chinese,
        cooker: "china",
        orderings: [],
      },
      {
        _id: new ObjectId(),
        dishName: "pizza",
        image: "image002",
        price: 20,
        rating: 2,
        type: ListingType.American,
        cooker: "american",
        orderings: [],
      },
      {
        _id: new ObjectId(),
        dishName: "sushi",
        image: "image003",
        price: 30,
        rating: 3,
        type: ListingType.Japanese,
        cooker: "japan",
        orderings: [],
      },
    ];

    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }

    for (const user of users) {
      await db.users.insertOne(user);
    }

    console.log(`[seed] : success`);
  } catch (error) {
    throw new Error("failed to seed database");
  }
};

seed();

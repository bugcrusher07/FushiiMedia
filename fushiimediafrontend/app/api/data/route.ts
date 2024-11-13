// import { NextRequest,NextResponse } from "next/server"
// import { db } from "@/lib/db";

// export async function POST(req:NextRequest) {

// try{

//     const data = await req.json()
//     const name = data.name
//     const email = data.email
//     const message = data.message
//     const phone = data.phone

//     console.log(`name = ${name} ,email = ${email}, message = ${message},phone = ${phone}`)

//     const result =  await db.query(`INSERT INTO forms (name, email, message, phone) VALUES (${data.name},${data.email}, ${data.message},${data.phone});`,[data])



//   return  NextResponse.json(

//     {  message:"i think it works man"},
//     {  status:200}

//   )
//   }catch(error){
//     console.log("error is ",error);

//   }

// }

import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, message, phone } = data


    const result = await db.query(
      'INSERT INTO forms (name, email, message, phone) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, message, phone]
    )

    return NextResponse.json(
      { message: "Data saved successfully", item: result.rows[0] },
      { status: 200 }
    )
  } catch (error) {
    console.log("Error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}